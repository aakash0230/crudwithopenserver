const Currdata = {
    fname: "",
    lname : "",
    priority : "",
    city : "",
    task : "",
  }


export const getData = async (setFinalFormData) => {  
    try{
        const response = await fetch("http://localhost:3001/tasks")
        let result = await response.json();
        setFinalFormData(result)
        return result;
    }
    catch(err){
        console.log(err)
        return (err)
    }
    
}



export const postAndPut = async(formData, setFormData) => {
    if(formData.id){
        try{
            console.log(" Inside post and put edit put data", formData)
            const response = await fetch(`http://localhost:3001/tasks/${formData.id}`,{
                method : "PUT",
                body : JSON.stringify(formData),
                headers : {
                    "content-type" : "application/json"
                }
            })
            const result = await response.json()
            console.log("put data last result", result)
            setFormData(Currdata)
            return result
        }
        catch(err){
            console.log(err)
            return err
        }
    }
    else{
        try{
            console.log("post data", formData)
            const response = await fetch(`http://localhost:3001/tasks`,{
                method : "POST",
                body : JSON.stringify(formData),
                headers : {
                    "content-type" : "application/json"
                }
            })
            const result = await response.json()
            console.log("Post data result", result)
            setFormData(Currdata)
            return result
        }
        catch(err){
            console.log(err)
            return err
        }
    }
}

export const deleteRequest = async(id) => {
    try{
        const response = await fetch(`http://localhost:3001/tasks/${id}`,{
            method : "DELETE"
        })
        const result = await response.json()
        console.log("delete data", result)
        return result
    }
    catch(err){
        console.log(err)
        return err
    }
}


