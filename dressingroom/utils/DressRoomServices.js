export class DressRoomServices {
    getListData() {
        let promise = axios({
            method: 'get',
            url: '../data/Data.json'
        });
        return promise;
    }
    getListObjStyle() {
        let promise = axios({
            method: 'get',
            url: '../data/objStyle.js'
        });
        return promise;
    }
}

