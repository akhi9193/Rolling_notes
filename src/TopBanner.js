import React from 'react';
import "./Nav.css";


function TopBanner() {
    return (
        <>
            {/* _________ BANNER _________ */}
            <div className='Banner'>
                <p > Previous Year Question Papers</p>
                <p><h1 className=''>DIBRUGARH UNIVERSITY </h1></p>
            </div>
            {/* _________ BANNER _________ */}

            {/* _________ BOX _________ */}
            <div className='box-out1'>
                <h6 className='p-fade'>Select Your Subject here:</h6>
            </div>
            {/* _________ BOX _________ */}



            {/* _________ BOX1 _________ */}
            <div className='box-out'>
            <div class="outer">
                    <div class="button">
                        <div class="text">B.com</div>
                    </div>
                </div>

                <div class="outer">
                    <div class="button">
                        <div class="text">M.Com</div>
                    </div>
                </div>

               <div class="outer">
                    <div class="button">
                        <div class="text">B.A</div>
                    </div>
                </div>

                <div class="outer">
                    <div class="button">
                        <div class="text">LLB</div>
                    </div>
                </div>

                <div class="outer">
                    <div class="button">
                        <div class="text">
                            B.Sc
                        </div>
                    </div>
                </div>
               
               
               
            </div>
            {/* _________ BOX1 _________ */}


        </>
    )
}

export default TopBanner;