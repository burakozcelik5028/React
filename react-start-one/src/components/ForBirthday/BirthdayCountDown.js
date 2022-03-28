import React, { useState, useEffect } from 'react';
import "./BRTH.css";


const BirthdayCountDown = () => {
   function formatDate(newDate) {
        const months = {
          0: 'Ocak',
          1: 'Şubat',
          2: 'Mart',
          3: 'Nisan',
          4: 'Mayis',
          5: 'Haziran',
          6: 'Temmuz',
          7: 'Ağustos',
          8: 'Eylül',
          9: 'Ekim',
          10: 'Kasim',
          11: 'Aralik',
        }
        const days = ['PZ', 'PZT', 'S', 'Ç', 'PRŞ', 'CU', 'CMT']
        const d = newDate
        const year = d.getFullYear();
        const date = d.getDate();
        const monthIndex = d.getMonth();
        const monthName = months[d.getMonth()];
        const dayName = days[d.getDay()]; // Thu
        const formattedDate = `${dayName}, ${date} ${monthName} ${year}`;

        var hour = d.getHours();
        if(hour<10){
            hour = "0"+hour;
        }
        var minute = d.getMinutes();
        if(minute<10){
            minute = "0"+minute;
        }
        var second = d.getSeconds();
        if(second<10){
            second = "0"+second;
        }
        const formatDate = `${hour}:${minute}:${second}`;
        
        return formattedDate.toString() + " " + formatDate.toString();
    }

    const formatSplit = (date) => {
        const myArray = date.split(" ");
        return myArray;
    }

    const [count, setCount] = useState(40);
    const [flag, setFlag] = useState(false);

    var dateee = "2022-03-24T23:59:"+count.toString();
    var newdateee = "2022-03-25T00:00:"+count.toString();

    if(count == 60 && flag == false) {
        setCount(0);
        var ne = "2022-03-25T00:00:00";
        var newDate = new Date(ne);
        setFlag(true);
    } else if (flag == true) {
        if( count < 10 ){
            var ne = "2022-03-25T00:00:0"+count.toString();
            var newDate = new Date(ne);
        } else {
            var newDate = new Date(newdateee);
        }
        
    } else {
        var newDate = new Date(dateee);
    }


    var formattedDate = formatDate(newDate);

    var newSplit = formatSplit(formattedDate);

    console.log("newSplit "+ newSplit);
     
    var lastDate = newSplit[0] +" "+ newSplit[1] +" "+ newSplit[2] +" "+ newSplit[3];
    var lastTime = newSplit[4];

    useEffect(() => {
        setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 1000);
      }, []);


    return <div>
        <center>
            <p>{lastTime}</p>
            <p2>{lastDate}</p2>
        </center>
    </div>
}

export default BirthdayCountDown;