

const Loader=()=>{
return(
    <div className="lds-ring"><div></div><div></div><div></div><div></div>
   <style jsx>{`
      .lds-ring {
        display: inline-block;
        position: relative;
        width: 30px;
        height: auto;
      }
      .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        top:-3px;
        margin: 4px;
        border: 2px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
      }
      .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
      }
      .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
      `}</style>

    </div>
)
}
export default Loader