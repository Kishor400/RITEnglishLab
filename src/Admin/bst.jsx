
import React, { useState } from 'react';
import Marks from "../assets/markData.json";
import log from "../assets/Log.json";
import QData from "../assets/QData.json";
import "./admin.css";




function BST() {
    var x=Marks;
    var bst=[];
    var n=QData.title.length;

    for(var i=0;i<n;i++){
      var y=[]
      for(var j=0;j<Marks.length;j++){
        var k=x[j];
        console.log(k)
        if(k[1]==i){
          y.push(k)
        }
      }
      if(y!=[]){
        var max=y[0];
        for(var l=0;l<y.length;l++){
          var m=y[l];
          if(m[2]>max[2]){
            max=m;
          }
        }
      }else{
        console.log("None")
      }
      bst.push(max)
    }

    console.log(bst)
    
     
    return (
    <>
        <div className='bstbox'>
           
        </div>
    </>
  )
}

export default BST;