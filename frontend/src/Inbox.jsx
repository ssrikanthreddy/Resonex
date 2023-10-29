import { useEffect } from "react";

const Inbox = () => {

  const handleSubmit = (buttonName) => {
    
    const formData = new FormData(document.getElementById('myForm'));
    const feelings = formData.get('feels');

  }

  return (
    <>
      <div className="inbox">
        <div className="prompt">Hello How are you</div>

        <div className="input">
          <form id="myForm" >
            <input name='feels' type="text" placeholder="Search..." />
          </form>  
        </div>
      </div>

      <div className="buttons">
        <button className="button seranos" onClick={()=> handleSubmit('seranos')} type="submit" name="seranos">Seranos</button>
        <button className="button theralyse" onClick={()=> handleSubmit('theralyse')} type="submit" name="theralyse">Theralyse</button>
      </div>
    </>
  )
}

export default Inbox;
