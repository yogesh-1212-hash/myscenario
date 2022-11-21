let id="";
//localStorage.clear();
 selectData ();
function manageData (){
    document.getElementById('msg').innerHTML="";
    let name=document.getElementById('name').value;
        if(name==''){
        

        document.getElementById('msg').innerHTML='please enter your name';
    }else{
        if(id==''){
           let arr=getCrudData();
           if(arr==null){
               let data=[name];
               localStorage.setItem('crud',JSON.stringify(data));
           }else{
             arr.push(name);
             localStorage.setItem('crud',JSON.stringify(arr));
           
           }
             document.getElementById('name').value=''
             document.getElementById('msg').innerHTML='Data added';
           
        }else{

        }
        selectData ();
    }
       
}

function selectData(){
    let arr=getCrudData();
    if(arr!=null){
       let html='';
       let sno=1;
       for(let k in arr){
          html=html+
          '<tr><td>{$"sno"}</td><td>${arr[k]}</td><td><a href="javascript:void(0)"onclick="editData(${k}")Edit></a>&nbsp; <a href="javascript:void(0)"onclick="deleteData(${k})">Delete</a></td></tr>';
          sno++;
       }
         document.getElementById('root').innerHTML=html;

   
    }



}
function editData () {

    
}
function deleteData(rid){
   let arr=getCrudData();
    arr.splice(rid,1);
    localStorage.setItem('crud',JSON.stringify(arr));
    selectData();
}
function getCrudData(){
    let arr=JSON.parse(localStorage.getItem('crud'));
    return arr;

}

