setInterval(()=>{
    d = new Date();
    
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    hrotation = h * 30 + m/2;
    mrotation = m * 6;
    srotation = s * 6;

    document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
    document.getElementById("minute").style.transform = `rotate(${mrotation}deg)`;
    document.getElementById("second").style.transform = `rotate(${srotation}deg)`;

}, 1000);