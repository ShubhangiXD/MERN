const date = new Date();
let calllog = [
    {
        "name": "Carson Robke",
        "phone": "117-229-1439",
        "callno": 1,
        "date": "2/25/2023",
        "time": "5:19"
    },
    {
        "name": "Fawnia Van Oord",
        "phone": "932-975-6357",
        "callno": 2,
        "date": "11/7/2022",
        "time": "12:06"
    },
    {
        "name": "Yalonda Copley",
        "phone": "274-550-3028",
        "callno": 3,
        "date": "6/6/2022",
        "time": "17:50"
    },
    {
        "name": "Loralee Blaszczynski",
        "phone": "594-525-8843",
        "callno": 4,
        "date": "1/17/2023",
        "time": "18:21"
    },
    {
        "name": "Orelia Chapleo",
        "phone": "896-584-4456",
        "callno": 5,
        "date": "9/22/2022",
        "time": "4:56"
    },
    {
        "name": "Scottie Bawles",
        "phone": "952-590-3242",
        "callno": 6,
        "date": "12/12/2022",
        "time": "23:04"
    },
    {
        "name": "Madlin Rengger",
        "phone": "438-333-7550",
        "callno": 7,
        "date": "3/16/2023",
        "time": "16:52"
    },
    {
        "name": "Vince Lanigan",
        "phone": "126-119-0522",
        "callno": 8,
        "date": "7/3/2022",
        "time": "21:52"
    },
    {
        "name": "Siouxie Pethick",
        "phone": "552-857-6397",
        "callno": 9,
        "date": "7/16/2022",
        "time": "20:17"
    },
    {
        "name": "Gibby Noke",
        "phone": "691-748-5469",
        "callno": 10,
        "date": "8/1/2022",
        "time": "12:10"
    },
    {
        "name": "Rogerio Dussy",
        "phone": "829-211-9305",
        "callno": 11,
        "date": "10/3/2022",
        "time": "18:13"
    },
    {
        "name": "Johann Grima",
        "phone": "807-263-9142",
        "callno": 12,
        "date": "1/10/2023",
        "time": "11:17"
    },
    {
        "name": "Nikkie MacGilpatrick",
        "phone": "326-456-7124",
        "callno": 13,
        "date": "12/18/2022",
        "time": "22:55"
    },
    {
        "name": "Rebeka Labrow",
        "phone": "519-715-8322",
        "callno": 14,
        "date": "10/24/2022",
        "time": "10:48"
    },
    {
        "name": "Ninnetta Vowells",
        "phone": "207-223-6088",
        "callno": 15,
        "date": "5/27/2023",
        "time": "18:58"
    },
    {
        "name": "Delinda Schnieder",
        "phone": "967-339-8743",
        "callno": 16,
        "date": "12/8/2022",
        "time": "16:08"
    },
    {
        "name": "Tiff Pimblett",
        "phone": "421-886-1975",
        "callno": 17,
        "date": "5/21/2023",
        "time": "15:39"
    },
    {
        "name": "Bryce Lankford",
        "phone": "862-494-8809",
        "callno": 18,
        "date": "10/26/2022",
        "time": "13:12"
    },
    {
        "name": "Zaccaria Bishopp",
        "phone": "353-540-5784",
        "callno": 19,
        "date": "1/22/2023",
        "time": "10:20"
    },
    {
        "name": "Al Varian",
        "phone": "620-491-8741",
        "callno": 20,
        "date": "12/21/2022",
        "time": "23:22"
    },
    {
        "name": "Archie Burnside",
        "phone": "281-713-3488",
        "callno": 21,
        "date": "3/2/2023",
        "time": "14:57"
    },
    {
        "name": "Corey Barff",
        "phone": "293-705-0526",
        "callno": 22,
        "date": "4/26/2023",
        "time": "10:12"
    },
    {
        "name": "Maxim Kincade",
        "phone": "776-594-0736",
        "callno": 23,
        "date": "9/4/2022",
        "time": "16:57"
    },
    {
        "name": "Margareta Diego",
        "phone": "769-272-3582",
        "callno": 24,
        "date": "1/12/2023",
        "time": "11:26"
    },
    {
        "name": "Cesar Melton",
        "phone": "483-168-2526",
        "callno": 25,
        "date": "2/11/2023",
        "time": "22:34"
    }
]

const out = calllog
    .map(obj => obj.name)
    .sort((a, b) => a.localeCompare(b) < b.localeCompare(a))
    .join(',');

console.log(out);
const namearr = out.split(',');

console.log(namearr);

//new caller details
const newcall = {
    "name": "Robert Pattinson",
    "phone": "483-168-2526",
    "callno": 25,
    "date": date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
    "time": date.getHours() + ":" + date.getMinutes()
}

const newcall2 = {
    "name": "Fawnia Van Oord",
    "phone": "932-975-6357",
    "callno": 2,
    "date": "11/7/2022",
    "time": "12:06 AM"
}

let newname = newcall.name
let newname2 = newcall2.name

let flag = 0;
let existing = [];
retrive = (newnames) => {
    for (const nameinarr of namearr) {
        if (nameinarr == newnames) {
            flag++;
            existing = calllog.find(calllog => calllog.name === newnames)
            break;
        }
    }
    console.log(existing)
    if (flag == 0) {
        calllog = [...calllog, newcall];
    }
    console.log(calllog);
}

retrive(newname)
retrive(newname2)