import { createContext, useState, useEffect, useContext } from "react"
import { db } from "../firebase/config";
import { ref, listAll, getStorage, getDownloadURL } from "firebase/storage";
export const RoomContext = createContext(null);
export const RoomProvider = ({ children }) => {
    const activeClass = (p) => {
        return p.isActive ? "active-item" : ""
    }
    const sum = [];
    const [room, setRoom] = useState([]);
    const storage = getStorage();
    const imgListRef = ref(storage, "image/");

    const [imgList, setImgList] = useState([]);

    useEffect(() => {
        db.collection("room").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                sum.push(doc.data());
                setRoom(sum);
            }
            );
        })
    }, [db])
    useEffect(() => {
        setTimeout(() => {
            listAll(imgListRef).then((res) => {
                res.items.forEach((item) => {
                    getDownloadURL(item).then((url) => {
                        setImgList((prev) => [...prev, { url: url }])
                    })
                })
            });
        }, 1000)
        return listAll
    }, []);
    // for (let index = 0; index < imgList.length; index++) {
    //     room[index].name = imgList[index].url
    // }
    for (let index = 0; index < imgList.length; index++) {
        room[index].name = imgList[index].url
    }
    return (
        <RoomContext.Provider value={{ room }}>
            {children}
        </RoomContext.Provider>
    )


}