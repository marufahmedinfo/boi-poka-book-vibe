import { toast } from "react-toastify";

//read list
const getStoredRedList = () => {
    const StoredListStr = localStorage.getItem('Read-List');
    if (StoredListStr) {
        const storedlist = JSON.parse(StoredListStr)
        return storedlist;
    } else {
        return [];
    }
};

const AddToStoredRedList = (id) => {

    const StoredList = getStoredRedList()
    if (StoredList.includes(id)) {
        toast('Olready Exiset')
    } else {
        StoredList.push(id)
        const StoredListStr = JSON.stringify(StoredList)
        localStorage.setItem('Read-List', StoredListStr)
        toast('This Books is added your Read List')
    }
};

//wish list
const  getStoredWishList = () => {
    const WishList = localStorage.getItem('Wish-List');
    if(WishList){
        const StoredWish = JSON.parse(WishList);
        return StoredWish;
    }else{
        return [];
    }

};

const AddToStoredWishList = (id) => {
    const StrodedListWish = getStoredWishList()
    if(StrodedListWish.includes(id)){
        toast('Olready Exist')
    }else{
        StrodedListWish.push(id)
        const WishStr = JSON.stringify(StrodedListWish);
        localStorage.setItem('Wish-List', WishStr);
        toast('This Books is added your West List')
    }
}

export { AddToStoredRedList, AddToStoredWishList, getStoredRedList, getStoredWishList }