import { createContext, useState, useEffect } from "react"
import { ref, listAll, getStorage, getDownloadURL, getMetadata } from "firebase/storage";
export const RoomContext = createContext(null);
export const RoomProvider = ({ children }) => {
    // const activeClass = (p) => {
    //     return p.isActive ? "active-item" : ""
    // }
    const storage = getStorage();
    const [room, setRoom] = useState([]);
    const imgListRef = ref(storage, "image/");
    // useEffect(() => {
    //     db.collection("room").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             setRoom((prev) => [...prev, doc.data()]);
    //         }
    //         );
    //     })
    // }, []);
    useEffect(() => {
        listAll(imgListRef).then((res) => {
            res.items.forEach((item) => {
                const forestRef = ref(storage, item._location.path_);
                getDownloadURL(item)
                    .then((url) => {
                        getMetadata(forestRef)
                            .then((metadata) => {
                                setRoom((prev) => [...prev, { info: metadata.customMetadata, url: url }]);
                            })
                    })


            })
        })

    }, [imgListRef, storage])
    // listAll(imgListRef).then((res) => {
    //     res.items.forEach((item) => {
    //         getDownloadURL(item).then((url) => {
    //             setImgList((prev) => [...prev, { url: url }])
    //         })
    //     })
    // })
    console.log(room)
    // useEffect(() => {
    //     db.collection("room").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             setRoom((prev) => [...prev, doc.data()]);
    //         }
    //         );
    //     })
    // }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         listAll(imgListRef).then((res) => {
    //             res.items.forEach((item) => {
    //                 getDownloadURL(item).then((url) => {
    //                     setImgList((prev) => [...prev, { url: url }])
    //                 })
    //             })
    //         })
    //     }, 1000)
    // }, []);
    // for (let i = 0; i < imgList.length; i++) {
    //     room[i].name = imgList[i].url
    // }

    return (
        <RoomContext.Provider value={{ room }}>
            {children}
        </RoomContext.Provider>
    )


}