export class DressRoomServices {
    getListData() {
        let promise = axios({
            method: 'get',
            url: '../data/Data.json'
        });
        return promise;
    }
}

