import { useState } from 'react'
import "./Addroom.css"
import { getStorage, ref, uploadBytes, updateMetadata } from "firebase/storage";


export default function Addroom() {
    const [imgUpload, setImgUpload] = useState(null);
    // const uploadData = (collection, data) => {
    //     db.collection(collection).add(data);
    // }
    const [formValue, setFormValue] = useState(
        {
            room: "",
            people: "",
            price: "",
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


    const handleChangeImg = (event) => {
        if (event.target.files[0]) {
            setImgUpload(event.target.files[0])
        }
    }
    const upLoad = () => {
        if (imgUpload && imgUpload !== null) {
            const imgRef = ref(storage, `image/${imgUpload.name + `${formValue.room}`}`);
            const metadata = {
                customMetadata: {
                    room: formValue.room,
                    people: formValue.people,
                    price: formValue.price,
                    
                }
            };
            uploadBytes(imgRef, imgUpload).then(() => {
                updateMetadata(imgRef, metadata)
                alert("Successful Create Room")
            })


        }
    }
    const handleSubmit = (event) => {
        if (imgUpload && formValue.room && formValue.people && formValue.price) {
            event.preventDefault();
            upLoad();
        } else {
            event.preventDefault();
            alert("Please Check Form Again")
        }
    }
    // const upLoad = () => {
    //     if (imgUpload && imgUpload !== null) {
    //         const imgRef = ref(storage, `image/${imgUpload.name + `${formValue.room}`}`);
    //         const metadata = {
    //             customMetadata: {
    //                 'location': 'Yosemite, CA, USA',
    //                 'activity': 'Hiking'
    //             }
    //         };
    //         uploadBytes(imgRef, imgUpload).then(() => {
    //             updateMetadata(imgRef, metadata)
    //             alert("Successful Create Room")
    //         })


    //     }
    // }
    // const handleSubmit = (event) => {
    //     if (imgUpload && formValue.room && formValue.people && formValue.price && formValue.add) {
    //         event.preventDefault();
    //         db.collection("room").doc().set({
    //             room: formValue.room,
    //             people: formValue.people,
    //             price: formValue.price,
    //             add: formValue.add,
    //             name: ""
    //         });
    //         upLoad();


    //     } else {
    //         event.preventDefault();
    //         alert("Please Check Form Again")
    //     }
    // }

    // const getMeta = (event) => {
    //     event.preventDefault();
    //     const forestRef = ref(storage, `image/Love.jfifdataaaaa`);
    //     getMetadata(forestRef
    //     )
    //         .then((metadata) => {
    //             console.log(metadata.customMetadata)
    //         })
    // }




    return (
        <div className="create-room">
            <form type="submit">
                <div className="form-control">
                    <label>Room</label>
                    <input name="room" value={formValue.room} type="text" onChange={handleChangeValue} ></input>
                </div>

                <div className="form-control">
                    <label>People</label>
                    <input name="people" value={formValue.people} type="number" onChange={handleChangeValue} ></input>
                </div>
                <div className="form-control">
                    <label>Price</label>
                    <input name="price" value={formValue.price} type="number" onChange={handleChangeValue} ></input>
                </div>
                <div className="form-control">
                    <label>Picture</label>
                    <input type="file" onChange={handleChangeImg}  ></input>
                </div>
                <button type="submit" onClick={handleSubmit}  >Create</button>

            </form >
            <div className="list-room">
            </div>
        </div >
    )
}
