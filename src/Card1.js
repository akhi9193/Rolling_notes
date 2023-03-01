import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
function Card1() {

    const [line1, setLine1] = useState("")
    const [line2, setLine2] = useState("")
    const [line3, setLine3] = useState("")

    const addLineCss1 = () => {
        setLine1("addline")
        setLine2("")
        setLine3("")
    }

    const addLineCss2 = () => {
        setLine2("addline")
        setLine1("")
        setLine3("")
    }


    const addLineCss3 = () => {
        setLine3("addline")
        setLine2("")
        setLine1("")
    }



    return (
        <>
            <div>
                <div className='box-out3'>
                    <p className='p-fade'>Previous Year Question Papers for B.Com (Both CBCS and Regular)</p>
                    <h2>Bachelor of Commerce</h2>
                    <p className='p-fade'>Under CBSC System</p>
                </div>
                <div className='Container-Main'>



                    <div className='container-fluid mt-4 '>
                        <div className='row p-4'>
                            <div className='col-lg-2 col-12 sidebuuton'>
                                <div onClick={() => addLineCss1()} className={"btn1 " + line1}>
                                    Semester 1
                                </div>
                                <div onClick={() => addLineCss2()} className={"btn1 " + line2}>
                                    Semester 2
                                </div>
                                <div onClick={() => addLineCss3()} className={"btn1 " + line3}>
                                    Semester 3
                                </div>
                            </div>
                            <div className='col-lg-10 col-12 p-4'>
                                <p className='p-fade'>Honours:</p>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Alernative English</Accordion.Header>
                                        <Accordion.Body>
                                            Tap on the year: <a href=''>2019</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Buisness Law</Accordion.Header>
                                        <Accordion.Body>
                                            Tap on the year: <a href=''>2019</a> <a href=''>2021</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Communicative English</Accordion.Header>
                                        <Accordion.Body>
                                            Tap on the year: <a href=''>2019</a> <a href=''>2021</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Economics</Accordion.Header>
                                        <Accordion.Body>
                                            Tap on the year: <a href=''>2019</a> <a href=''>2021</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Financial Accounting</Accordion.Header>
                                        <Accordion.Body>
                                            Tap on the year: <a href=''>2019</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <p className='p-fade'>Honours:</p>

                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Buisness Organisation and Management</Accordion.Header>
                                        <Accordion.Body>
                                            Tap on the year: <a href=''>2019</a> <a href=''>2021</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Financial Accounting</Accordion.Header>
                                        <Accordion.Body>
                                            Tap on the year: <a href=''>2019</a> <a href=''>2021-Core</a><a href=''>2021-Discipline Secific</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Multi-disciplinary Course</Accordion.Header>
                                        <Accordion.Body>
                                            Tap on the year: <a href=''>2021</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>English Communication</Accordion.Header>
                                        <Accordion.Body>
                                            Tap on the year: <a href=''>2021</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Assamese</Accordion.Header>
                                        <Accordion.Body>
                                            Tap on the year: <a href=''>2019</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>


                            </div>
                            <p className='p-fade1' >  Tap on the year: <a href=''>2021</a></p>


                        </div>
                        <div className='box-4'>
                            <div className='box3'>
                                <h2>NOTE: More CBCS Papers will added soon</h2>
                            </div>
                        </div>

                        <p className='p-fade1' > NON- CBCS (Regular) System</p>
                        0-
                        {/* div for non cbcs regular system  */}
                        <div className='container-fluid mt-4'>
                        <div className='row p-4'>
                        <div className='col-lg-2 col-12 sidebuuton'>
                            <div onClick={() => addLineCss1()} className={"btn1 " + line1}>
                                Semester 1
                            </div>
                            <div onClick={() => addLineCss2()} className={"btn1 " + line2}>
                                Semester 2
                            </div>
                            <div onClick={() => addLineCss3()} className={"btn1 " + line3}>
                                Semester 3
                            </div>
                        </div>
                        <div className='col-lg-10 col-12 p-4'>
                            <p className='p-fade'>Honours:</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Alernative English</Accordion.Header>
                                    <Accordion.Body>
                                        Tap on the year: <a href=''>2019</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Buisness Law</Accordion.Header>
                                    <Accordion.Body>
                                        Tap on the year: <a href=''>2019</a> <a href=''>2021</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Communicative English</Accordion.Header>
                                    <Accordion.Body>
                                        Tap on the year: <a href=''>2019</a> <a href=''>2021</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Economics</Accordion.Header>
                                    <Accordion.Body>
                                        Tap on the year: <a href=''>2019</a> <a href=''>2021</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Financial Accounting</Accordion.Header>
                                    <Accordion.Body>
                                        Tap on the year: <a href=''>2019</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>
                        </div>
                        </div>
                      



                    </div>
                </div>


                <div className='container'>
                <iframe src="https://rollingnotes.in/pdf_embed_type/2021-held-in-2022-human-resource-development-question-paper-5th-semester-bcom-cbcs-dibrugarh-university/" width="100%" height="500px"/> 
                </div>
            </div>
        </>
    )
}
export default Card1;