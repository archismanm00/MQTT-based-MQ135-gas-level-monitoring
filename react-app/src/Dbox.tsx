 

 import './Dboxs.css';

 
 function Dbox(props:any){
    return <>
        <div className = 'dbx'>
            
            <svg className = "crcl" >
                <circle className = "trk" cx = "50%" cy = "50%" r = "45%" />
                <circle className = "indic" cx = "50%" cy = "50%" r = "45%" strokeDashoffset = {calclvl(props.Lvl)} />
            </svg> 
           <div className = "gasName">
                <p className = "Gsnm">{props.Gas}</p>
                <p className = "Gslvl">{props.Lvl}</p>
                <p className = 'Ppm'>PPM</p>
           </div>
        </div>
    </>
    
    
 }

 export default Dbox;


 
function calclvl(lvl:number){

    //x/910.6 = y/40000 for co2
    
    let x = (lvl*1130.4)/40000
    

    return (1130.4 - x);
}
