import React, { useEffect, useState } from "react";
import { ImageSelect, Input, RadioInput, SelectInput } from "./common/input";
import { useContactStore } from "../app/contactStore";
import { ContactInterface, Type } from "../interfaces/contact";
import { useRouter } from "next/router";
import { storage } from "../firebase";
import {  ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import Loader from "./common/loader";
interface Props {
  id?: string;
}
const selectOptions = [
  { value: Type.PERSONAL, label: "Personal" },
  { value: Type.OFFICE, label: "Office" },
];
const RadioOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];
const Contact = (props: Props) => {
  const router = useRouter();
  const { contactData, setContact, editContact } = useContactStore();
  const [loading,setLoading]=useState(false)
  const { id } = props;
  const [form, setForm] = useState<ContactInterface>({
    name: "",
    phone: "",
    isWhatsapp: "no",
    type: Type.PERSONAL,
    image: null,
  });
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const submitForm = (imageName?: string) => {
      if (id) {
        editContact(id, {
          ...form,
          isWhatsapp:form.isWhatsapp==='yes'?true:false,
          image: imageName
            ? `https://firebasestorage.googleapis.com/v0/b/uploading-file-35254.appspot.com/o/images%2F${imageName}?alt=media&token=a5b71c41-775f-49c9-b43f-1f32d2f8a808`
            : form.image,
        });
      } else {
        setContact({
          ...form,
          isWhatsapp:form.isWhatsapp==='yes'?true:false,
          image: imageName
            ? `https://firebasestorage.googleapis.com/v0/b/uploading-file-35254.appspot.com/o/images%2F${imageName}?alt=media&token=a5b71c41-775f-49c9-b43f-1f32d2f8a808`
            : form.image,
        });
      }
      router.push("/");
    };
    if (imageUpload) {
      setLoading(true)
      const imageName = imageUpload.name + v4();
      const imageRef = ref(storage, `images/${imageName}`);
      uploadBytes(imageRef, imageUpload).then((res) => {
        submitForm(imageName);
        setLoading(false)
      }).catch((err)=>{
        setLoading(false)
      });
    } else {
      submitForm();
    }
  };
  useEffect(() => {
    if (id) {
      contactData.forEach((item) => {
        if (item.phone === id) setForm({...item,isWhatsapp:item.isWhatsapp?'yes':'no'});
      });
    }
  }, [contactData, id]);

  return (
    <form className="space-y-8 divide-y divide-gray-200" onSubmit={onSubmit}>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <ImageSelect
          onChange={(e) => setImageUpload(e.target.files![0])}
          imageUpload={imageUpload}
          value={form.image}
        />
        <Input
          label="Name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          label="Phone"
          name="phone"
          type="number"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <SelectInput
          label="Type"
          name="type"
          options={selectOptions}
          value={form.type}
          onChange={(e) => {
            console.log(e);
            setForm({ ...form, type: e });
          }}
        />
        <RadioInput
          label="Whatsapp"
          options={RadioOptions}
          value={form.isWhatsapp}
          onChange={(e) =>
            setForm({
              ...form,
              isWhatsapp: e.target.value,
            })
          }
        />
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            onClick={() => router.push("/")}
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
          disabled={loading}
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {!loading? id ? "Update" : "Save":<Loader/>}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
