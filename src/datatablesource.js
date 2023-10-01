export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'username', // Use 'username' instead of 'user'
    headerName: 'User',
    width: 230,
    renderCell: (params) => (
      <div className="cellWithImg">
        <img className="cellImg" src={params.row.img} alt="avatar" />
        {params.row.username}
      </div>
    ),
  },
  {
    field: 'email', // Add 'email' field
    headerName: 'Email',
    width: 230,
  },
  {
    field: 'age', // Add 'age' field
    headerName: 'Age',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => (
      <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
    ),
  },
];
//temporary data
export const userRows =[
    {
        id: 1,
        username: "Snow",
        img: "https://www.pngkit.com/png/full/255-2559295_men-robert-negoita.png",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Will",
        img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e",
        status: "active",
        email: "1snow@gmail.com",
        age: 30,
    },
    {
        id: 3,
        username: "James",
        img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e",
        status: "passive",
        email: "1snow@gmail.com",
        age: 25,
    },
    {
        id: 4,
        username: "Samuel",
        img: "https://www.pngkit.com/png/full/255-2559295_men-robert-negoita.png",
        status: "pending",
        email: "1snow@gmail.com",
        age: 28,
    },
    {
        id: 5,
        username: "John",
        img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e",
        status: "passive",
        email: "1snow@gmail.com",
        age: 22,
    },
    {
        id: 6,
        username: "George",
        img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e",
        status: "active",
        email: "1snow@gmail.com",
        age: 31,
    },
    {
        id: 7,
        username: "Sam",
        img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e",
        status: "active",
        email: "1snow@gmail.com",
        age: 23,
    },
    {
        id: 8,
        username: "Fred",
        img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e",
        status: "passive",
        email: "1snow@gmail.com",
        age: 32,
    },
    {
        id: 9,
        username: "Richard",
        img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e",
        status: "active",
        email: "1snow@gmail.com",
        age: 26,
    },
    {
        id: 10,
        username: "William",
        img: "https://www.pngkit.com/png/full/255-2559295_men-robert-negoita.png",
        status: "Pending",
        email: "1snow@gmail.com",
        age: 27,
    },
];