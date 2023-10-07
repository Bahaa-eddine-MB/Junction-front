import Layout from "../home/Layout";


function Admin() {
    const students=[{
        name:"Hello",
        email:"email@email.com"
    },
    {
        name:"Hello",
        email:"email@email.com"
    },
    {
        name:"Hello",
        email:"email@email.com"
    },
    {
        name:"Hello",
        email:"email@email.com"
    },
    {
        name:"Hello",
        email:"email@email.com"
    }
]
    return ( 
        <Layout >
            <div className="px-24 py-3">
                <h1 className="text-[#105B70] text-4xl font-bold mt-16 mb-6"> Teachers space</h1>
                <div className="px-20">
                <div className="border py-6 border-black/20  rounded-md px-5 flex items-center justify-between">
                    <div className="flex gap-x-1">
                        <div className="w-14 h-14 rounded-sm bg-[#e99516] flex justify-center items-center">
                            <Eye/>
                        </div>
                        <div className="w-14 h-14 rounded-sm bg-[#1baad1] flex justify-center items-center">
                            <Hat/>
                        </div>
                        <div className="w-14 h-14 rounded-sm bg-[#f1c4d3] flex justify-center items-center">
                            <TV/>
                        </div>
                    </div>
                    <Stats/>
                </div>
            <div className="flex  mt-10 justify-between">
                <div className="border border-black/20 rounded-md px-5 py-3  w-[350px]">
                    <h1 className="text-[#105B70] text-lg font-medium">Write a note</h1>
                    <select className="p-1 block  mt-2 w-full rounded-md">
                        <option value="" selected hidden>chose a groupe or student</option>
                    </select>
                    <textarea className="resize-none w-full mt-5 rounded-md p-1 h-40" placeholder="type something ...."></textarea>
                    <div className="ml-auto bg-[#1baad1] w-fit px-4 py-1 rounded-sm mt-2">Submit</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex gap-x-20">
                        <div className="px-6 cursor-pointer py-0.5 text-lg border-black/20 rounded-md border">task</div>
                        <div className="px-6 cursor-pointer py-0.5 text-lg border-black/20 rounded-md border">course</div>
                    </div>
                    <div className="bg-[#1baad1] p-8 rounded-full w-fit">
                        <Plus/>
                    </div>
                 </div>
                </div>
                <div className="mt-10">
                    <h1 className="my-10 text-xl text-[#105B70] font-medium">Students list</h1>
                    <div className=" border  py-1 border-black/10 rounded-md ">
                        <div className="border-b px-5 mb-2 border-black/10  grid grid-cols-[1fr_2fr]">
                            <h1>Name</h1>
                            <h1>Email</h1>
                        </div>
                        <div className="grid px-5 grid-cols-[1fr_2fr]">
                            {students.map((e)=>
                            (
                                <>
                                    <h1 className="py-2 ">{e.name}</h1>
                                    <h1 className="py-2 ">{e.email}</h1>
                                </>
                            ))}
                        </div>
                    </div>
               </div>
                </div>
               
            </div>
        </Layout>
     );
}

export default Admin;


function Eye() {
    return ( 
        <svg
  width={36}
  height={26}
  viewBox="0 0 73 54"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2 27C2 27 14.5 2 36.375 2C58.25 2 70.75 27 70.75 27C70.75 27 58.25 52 36.375 52C14.5 52 2 27 2 27Z"
    stroke="white"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M36.375 36.375C41.5527 36.375 45.75 32.1777 45.75 27C45.75 21.8223 41.5527 17.625 36.375 17.625C31.1973 17.625 27 21.8223 27 27C27 32.1777 31.1973 36.375 36.375 36.375Z"
    stroke="white"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

     );
}


function Hat() {
    return ( 
        <svg
  width={32}
  height={30}
  viewBox="0 0 64 60"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M63.9998 20.6144V51.3344C63.9998 52.0416 63.7188 52.7199 63.2187 53.22C62.7186 53.7201 62.0403 54.001 61.3331 54.001C60.6259 54.001 59.9476 53.7201 59.4475 53.22C58.9474 52.7199 58.6664 52.0416 58.6664 51.3344V29.3397L38.9331 38.7691C36.8524 39.9972 34.4771 40.6369 32.0611 40.6197C29.5274 40.6236 27.0397 39.9428 24.8611 38.6491L5.1811 29.281C3.63411 28.4492 2.33792 27.2185 1.42702 25.7167C0.516116 24.2149 0.0236888 22.4967 0.000833508 20.7403C-0.0220218 18.984 0.425528 17.2536 1.29704 15.7286C2.16856 14.2036 3.43229 12.9396 4.9571 12.0677C5.0291 12.0251 5.10643 11.9851 5.1811 11.9477L25.0664 2.45972C27.2133 1.22681 29.6498 0.588058 32.1254 0.609148C34.601 0.630239 37.0262 1.31042 39.1518 2.57972L58.8184 11.9477C60.3703 12.8063 61.6671 14.0605 62.5772 15.5827C63.4872 17.105 63.9781 18.841 63.9998 20.6144ZM32.0584 45.9477C28.6466 45.9553 25.2934 45.0611 22.3384 43.3557L10.6664 37.785V44.985C10.668 47.8318 11.5794 50.6035 13.2676 52.8956C14.9557 55.1878 17.3323 56.8804 20.0504 57.7264C23.934 58.8414 27.9596 59.3831 31.9998 59.3344C36.0405 59.3797 40.0661 58.8344 43.9491 57.7157C46.6672 56.8697 49.0438 55.1771 50.732 52.885C52.4201 50.5928 53.3315 47.8211 53.3331 44.9744V37.7984L41.4424 43.4784C38.5882 45.1182 35.3502 45.9721 32.0584 45.953V45.9477Z"
    fill="white"
  />
</svg>

     );
}


function Plus() {
    return ( 
        <svg
  width={81}
  height={81}
  viewBox="0 0 81 81"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M80.5353 52.6949H53.1618V80.6976H27.6762V52.6949H0.302734V28.6251H27.6762V0.465088H53.1618V28.6251H80.5353V52.6949Z"
    fill="#F2F7FA"
  />
</svg>
     );
}


type props={
 className:string
}


function Calendar({className}:props) {
 return ( 
     <svg className={className} viewBox="0 0 24 24" fill="#E4E81E" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#E4E81E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  );
}

function Stats() {
    return ( 
    <svg width="442" height="193" viewBox="0 0 442 193" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0L1.00001 184" stroke="#323232" stroke-opacity="0.12"/>
        <path d="M442 185L1.00001 185" stroke="#323232" stroke-opacity="0.12"/>
        <g filter="url(#filter0_f_119_3233)">
        <path d="M20 185V153.896L85.6907 81.7104L168.391 125.726L302.704 33L354.319 94.6216L403 65.278V185H354.319H20Z" fill="#009FE3" fill-opacity="0.06"/>
        </g>
        <path d="M21 154L85.5176 81.8558L169.39 125.846L301.945 32L354.145 93L404 62.5" stroke="#9747FF"/>
        <g filter="url(#filter1_d_119_3233)">
        <circle cx="85.5" cy="82.5" r="4.5" fill="white"/>
        </g>
        <g filter="url(#filter2_d_119_3233)">
        <circle cx="169.5" cy="125.5" r="4.5" fill="white"/>
        </g>
        <g filter="url(#filter3_d_119_3233)">
        <ellipse cx="302" cy="32.5" rx="5" ry="4.5" fill="white"/>
        </g>
        <g filter="url(#filter4_d_119_3233)">
        <circle cx="354.5" cy="92.5" r="4.5" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_f_119_3233" x="12" y="25" width="399" height="168" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_119_3233"/>
        </filter>
        <filter id="filter1_d_119_3233" x="65" y="62" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="8"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.623529 0 0 0 0 0.890196 0 0 0 0.66 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_119_3233"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_119_3233" result="shape"/>
        </filter>
        <filter id="filter2_d_119_3233" x="149" y="105" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="8"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.623529 0 0 0 0 0.890196 0 0 0 0.66 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_119_3233"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_119_3233" result="shape"/>
        </filter>
        <filter id="filter3_d_119_3233" x="281" y="12" width="42" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="8"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.623529 0 0 0 0 0.890196 0 0 0 0.66 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_119_3233"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_119_3233" result="shape"/>
        </filter>
        <filter id="filter4_d_119_3233" x="334" y="72" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="8"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.623529 0 0 0 0 0.890196 0 0 0 0.66 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_119_3233"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_119_3233" result="shape"/>
        </filter>
        </defs>
    </svg>
        
     );
}

function TV() {
    return ( 
      <svg
        width={48}
        height={38}
        viewBox="0 0 48 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
       <path
         d="M38 0H10C7.34881 0.00317572 4.80712 1.05776 2.93244 2.93244C1.05776 4.80712 0.00317572 7.34881 0 10L0 22C0.00317572 24.6512 1.05776 27.1929 2.93244 29.0676C4.80712 30.9422 7.34881 31.9968 10 32H22V34H16C15.4696 34 14.9609 34.2107 14.5858 34.5858C14.2107 34.9609 14 35.4696 14 36C14 36.5304 14.2107 37.0391 14.5858 37.4142C14.9609 37.7893 15.4696 38 16 38H32C32.5304 38 33.0391 37.7893 33.4142 37.4142C33.7893 37.0391 34 36.5304 34 36C34 35.4696 33.7893 34.9609 33.4142 34.5858C33.0391 34.2107 32.5304 34 32 34H26V32H38C40.6512 31.9968 43.1929 30.9422 45.0676 29.0676C46.9422 27.1929 47.9968 24.6512 48 22V10C47.9968 7.34881 46.9422 4.80712 45.0676 2.93244C43.1929 1.05776 40.6512 0.00317572 38 0Z"
         fill="white"/>
     </svg>

     );
}

