import{useState, useRef, useEffect} from 'react';
import Dbox from './Dbox';

import BarGraph from './barGraph';
import './App.css';
import dt from './quarantine/dt.json'






function App() {

        
                   



    return <>
                
                <div className = "Name">
                    <h1 className = "Header">MQTT Based Remote Gas level Monitoring</h1>

                </div>
                
                
                <div className = "flxdtbx">
                    <div><Dbox Lvl = {dt[0].ppm} Gas = {dt[0].gas} /></div>
                    <div><Dbox Lvl = {dt[1].ppm} Gas = {dt[1].gas} /></div>
                    <div><Dbox Lvl = {dt[2].ppm} Gas = {dt[2].gas} /></div>
                    <div><Dbox Lvl = {dt[3].ppm} Gas = {dt[3].gas} /></div>
                    <div><Dbox Lvl = {dt[4].ppm} Gas = {dt[4].gas} /></div>
                    <div><Dbox Lvl = {dt[5].ppm} Gas = {dt[5].gas} /></div>
                    <div className = "BrGrph">
                        <h1 className = "heading">Bar Graph Of Gas Levels</h1>
                        <BarGraph />
                    </div>
                    
                </div>
                
                <div className = "Credit">
                <h1 className = "Tailer">Project Done By: Archisman Majumdar (179),Abanindra Kumar Mandal (180) ,Vanshika Agarwal (181)</h1>
                </div>
                
            
  

                
                

                
                
            
            
    </>
 
}



export default App; 