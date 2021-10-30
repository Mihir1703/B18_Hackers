import React, { useEffect, useState } from 'react'

const PriceTable = (props) => {
    const [crops, setcrops] = useState([])
    let fetchReq = async (crop) => {
        let url = `http://localhost:8000/api/crop/${crop}/${props.city.toLowerCase()}`
        console.log(url)
        let data = await fetch(url)
        let parsedData = JSON.parse(JSON.stringify(await data.json()))
        return parsedData
    }
    useEffect(async () => {
        let data = []
        let res = await fetchReq("wheat")
        data.push(res)
        res = await fetchReq("rice")
        data.push(res)
        res = await fetchReq("pulse")
        data.push(res)
        setcrops(data)
        console.log(crops)
    }, [])
    return (
        <div className="price-table">
            <div className="head-price">
                <span>Price table of different crop sale</span>
            </div>
            <div className="tables">
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Crop</th>
                            <th>Variety</th>
                            <th>Maximum Price</th>
                            <th>Minimum Price</th>
                            <th>Minimum Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {crops.map(e => {
                            return e.map(e1=>{
                                return (
                                    <tr key={e1.id}>
                                        <td>{e1.crop}</td>
                                        <td>{e1.variety}</td>
                                        <td>{e1.max_price}</td>
                                        <td>{e1.min_price}</td>
                                        <td>{parseInt(e1.prod_per_acre)*parseInt(e1.min_price)}</td>
                                    </tr>
                                )
                            })
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PriceTable
