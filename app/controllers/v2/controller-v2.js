export let renderFoodList = (foodArr) => {
    let contentHTML = "";
    foodArr.forEach((food) => {
        let {ma, ten, loai, gia, khuyenMai, hinhAnh, tinhTrang, moTa} = food;
        let giaKhuyenMai = (gia * (100 - khuyenMai)*0.01).toFixed(2)
        contentHTML += `<tr>
                            <td>${ma}</td>
                            <td>${ten}</td>
                            <td>${loai}</td>
                            <td>${gia}</td>
                            <td>${khuyenMai}%</td>
                            <td>${giaKhuyenMai}</td>
                            <td>${tinhTrang}</td>
                            <td><button onclick="deleteFood(${ma})" class="btn btn-danger">Xóa</button></td>
                            <td><button onclick="editFood(${ma})" class="btn btn-primary">Sửa</button></td>
                        </tr>`
    })
    document.getElementById('tbodyFood').innerHTML = contentHTML;
}

export let getDataForm = () => {
    let ma = document.getElementById('foodID').value;
    let ten = document.getElementById('tenMon').value;
    let loai = document.getElementById('loai').value;
    let gia = document.getElementById('giaMon').value;
    let khuyenMai = document.getElementById('khuyenMai').value;
    let tinhTrang = document.getElementById('tinhTrang').value;
    let hinhAnh = document.getElementById('hinhMon').value;
    let moTa = document.getElementById('moTa').value;
    return {
        ma,
        ten,
        loai,
        gia,
        khuyenMai,
        tinhTrang,
        hinhAnh,
        moTa
    }
}

export let showDataForm = (data) => {
    let {ma, ten, loai, gia, khuyenMai, tinhTrang, hinhAnh, moTa} = data
    document.getElementById('foodID').value = ma
    document.getElementById('tenMon').value = ten
    document.getElementById('loai').value = loai
    document.getElementById('giaMon').value = gia
    document.getElementById('khuyenMai').value = khuyenMai
    document.getElementById('tinhTrang').value = tinhTrang
    document.getElementById('hinhMon').value = hinhAnh
    document.getElementById('moTa').value = moTa
}

export let clearModal = () => {
    document.getElementById('foodID').value = ''
    document.getElementById('tenMon').value = ''
    document.getElementById('loai').value = ''
    document.getElementById('giaMon').value = ''
    document.getElementById('khuyenMai').value = ''
    document.getElementById('tinhTrang').value = ''
    document.getElementById('hinhMon').value = ''
    document.getElementById('moTa').value = ''
}

export let turnOnLoading = () => {
    document.querySelector('#spinner').style.display = 'flex';
}
export let turnOffLoading = () => {
    document.querySelector('#spinner').style.display = 'none';
}