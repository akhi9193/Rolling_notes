import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import TEST from '../src/TEST.pdf'
function Card1() {

    const [line1, setLine1] = useState("")
    const [line2, setLine2] = useState("")
    const [line3, setLine3] = useState("")
    const [line4, setLine4] = useState("")
    const [line5, setLine5] = useState("")
    const [line6, setLine6] = useState("")

    const addLineCss1 = () => {
        setLine1("addline")
        setLine2("")
        setLine3("")
        setLine4("")
        setLine5("")
        setLine6("")
    }

    const addLineCss2 = () => {
        setLine2("addline")
        setLine1("")
        setLine3("")
        setLine4("")
        setLine5("")
        setLine6("")
    }


    const addLineCss3 = () => {
        setLine3("addline")
        setLine2("")
        setLine1("")
        setLine4("")
        setLine5("")
        setLine6("")

    }
    const addLineCss4 = () => {
        setLine1("")
        setLine2("")
        setLine3("")
        setLine4("addline")
        setLine5("")
        setLine6("")
    }

    const addLineCss5 = () => {
        
        setLine5("addline")
        setLine2("")
        setLine1("")
        setLine3("")
        setLine4("")
        setLine6("")
        
    }


    const addLineCss6 = () => {
        setLine6("addline")
        setLine2("")
        setLine1("")
        setLine3("")
        setLine4("")
        setLine5("")
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
                            <div onClick={() => addLineCss4()} className={"btn1 " + line4}>
                                    Semester 4
                                </div>
                                <div onClick={() => addLineCss5()} className={"btn1 " + line5}>
                                    Semester 5
                                </div>
                                <div onClick={() => addLineCss6()} className={"btn1 " + line6}>
                                    Semester 6
                                </div>
                        </div>
                        <div className='col-lg-10 col-12 p-4'>
                            <p className='p-fade'>Honours:</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Buisness Communication</Accordion.Header>
                                    <Accordion.Body>
                                        Tap on the year: <a href=''>2011</a> <a href=''> 2012</a> <a href=''> 2013</a><a href=''> 2014</a> <a href=''> 2015</a> <a href=''> 2016</a>  <a href=''> 2017</a><a href=''> 2018</a> <a href=''> 2019</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Buisness Environment</Accordion.Header>
                                    <Accordion.Body>
                                         Tap on the year: <a href=''>2011</a> <a href=''> 2012</a> <a href=''> 2013</a><a href=''> 2014</a> <a href=''> 2015</a> <a href=''> 2016</a>  <a href=''> 2017</a><a href=''> 2018</a> <a href=''> 2019</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Buisness Law</Accordion.Header>
                                    <Accordion.Body>
                                         Tap on the year: <a href=''>2011</a> <a href=''> 2012</a> <a href=''> 2013</a><a href=''> 2014</a> <a href=''> 2015</a> <a href=''> 2016</a>  <a href=''> 2017</a><a href=''> 2018</a> <a href=''> 2019</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Financial Accounting</Accordion.Header>
                                    <Accordion.Body>
                                         Tap on the year: <a href=''>2011</a> <a href=''> 2012</a> <a href=''> 2013</a><a href=''> 2014</a> <a href=''> 2015</a> <a href=''> 2016</a>  <a href=''> 2017</a><a href=''> 2018</a> <a href=''> 2019</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                
                            </Accordion>

                        </div>
                        </div>
                        </div>
 
                    </div>
                </div>
                <div className='container'>
                {/* <iframe src="./TEST.pdf" width="100%" height="500px"/>  */}
                <embed src={TEST}  width="100%" height="500px"/>
                </div>
            </div>
        </>
    )
}
export default Card1;