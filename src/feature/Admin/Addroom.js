import { useEffect, useState } from 'react'
import { db } from "../../firebase/config"
import "./Addroom.css"
import { getStorage, ref, uploadBytes } from "firebase/storage";


export default function Addroom() {
    const [fileName, setFileName] = useState("No selected File")

    const uploadData = (collection, data) => {
        db.collection(collection).add(data);
    }
    const [formValue, setFormValue] = useState(
        {
            room: "",
            people: "",
            price: "",
            img: ""
        }
    )
    const handleChangeValue = (event) => {
        const { name, value } = event.target;
        setFormValue({
            ...formValue,
            [name]: value
        })
        console.log(formValue)
    }

    const storage = getStorage();

    const mountainsRef = ref(storage, fileName);

    const mountainImagesRef = ref(storage, fileName);


    const storageRef = ref(storage, "2");
    const handleSubmit = (event) => {
        event.preventDefault();
        uploadData("room", {
            room: formValue.room,
            people: formValue.people,
            price: formValue.price,
        })
        uploadBytes(storageRef, fileName).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
        console.log(fileName)

    }

    return (
        <div className="create-room">
            <form type="submit">
                <div className="form-control">
                    <label>Room</label>
                    <input name="room" value={formValue.room} type="text" onChange={handleChangeValue} ></input>
                </div>
                <div className="form-control">
                    <label>People</label>
                    <select name="people" value={formValue.people} onChange={handleChangeValue}>
                        <option >1 aldut</option>
                        <option selected >2 aldut</option>
                        <option>Family</option>
                    </select>
                </div>
                <div className="form-control">
                    <label>Price</label>
                    <input name="price" value={formValue.price} type="number" onChange={handleChangeValue} ></input>
                </div>
                <div className="form-control">
                    <label>Picture</label>
                    <input type="file" onChange={({ target: { files } }) => {
                    setFileName(URL.createObjectURL(files[0]))
                    }}  ></input>
                </div>
                <button type="submit" onClick={handleSubmit} >Create</button>
            </form >
            <div className="list-room">
            </div>
        </div >
    )
}
