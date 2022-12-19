// DATE 형식 관련 클래스
class DateFormat {
    changeFormat(string) {
        let date = new Date(string);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        
        month = month >= 10 ? month : '0' + month;
        day = day >= 10 ? day : '0' + day;
      
        return `${date.getFullYear()}${month}${day}`;
    }
}

module.exports = DateFormat;