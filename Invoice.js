function Invoice(){
    return(
        <>
        <div style={{ backgroundColor:"rgb(211, 211, 211)",height:"100vh"}} >
        <div className="container-fluid" style={{  backgroundColor:"white",width:"70%", border:"2px solid grey"}}>
         <div style={{backgroundColor:" ",height:"auto", display:"flex", padding:"10px"}}>
    
        <div style={{backgroundColor:" ",height:"auto",width:"500px", padding:"10px"}}>
        <p> Hostinger PTE
        <br></br>
16 Raffles Quay, #33-02, Hong Leong Building
<br></br>
Singapore 48581
<br></br>
Singapore
<br></br>
VAT Reg #: 9919SGP29004OSJ<br></br>
</p>
</div>
<div style={{backgroundColor:"",height:"auto",width:"500px",display:"flex",justifyContent:"flex-end", padding:"10px"}}>
Invoice # HSG-841693<br></br>
Invoice Date # Oct 25, 2023<br></br>
Invoice Amount # ₹1,681.00 (INR)<br></br>
Next Billing Date # Nov 25, 2023<br></br>
Order Nr. # hb_5958202<br></br>
PAID
</div>
</div>
<div style={{backgroundColor:"",height:"auto",width:"500px",display:"flex", padding:"15px"}}>
BILLED TO<br></br>
Anish Dhar<br></br>
ATRASKI<br></br>
IN19CCDPD5287P1ZY<br></br>
K-2080, 2nd Floor CR Park<br></br>
Delhi 110019<br></br>
New Delhi<br></br>
India<br></br>
atraskiweb@gmail.com<br></br>
917008824079<br></br>
</div >
<hr style={{height:"15px"}}></hr>
<div  className="container-fluid"style={{display:"flex",justifyContent:"space-between"}}>
     <div>
        <h6>Description</h6>

    </div>
    <div>
        <h6>Price</h6>

    </div>
    <div>
        <h6>TOTAL EXCL. VAT</h6>
    </div>
    <div>
        <h6>AMOUNT (INR)</h6>
    </div>
</div>
<hr></hr>
<div  className="container-fluid"style={{display:"flex", height:"30px"}}>

</div>
<hr></hr>
<div style={{ display:"flex",justifyContent:"flex-end"}}>
    <div style={{width:"200px", display:"flex",justifyContent:"flex-end",padding:"10px"}}>
        hellooo
    </div>
    <div style={{width:"200px", display:"flex",justifyContent:"flex-end",padding:"10px"}}>yesss</div>


</div>
</div>
</div>
        </>
    )
}
export default Invoice 