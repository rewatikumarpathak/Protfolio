import React from 'react';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
    weight:"400",
    subsets:["latin"]
})

export default function Worktwo() {
  return (
   <section>
     <div>
        <div className="text-center mt-7">
        <h3 className={`${poppins.className} underline text-[1.1rem] md:text-[1.4rem] font-bold`}>Video edit</h3>
      </div>
     </div>
   </section>
  )
}
