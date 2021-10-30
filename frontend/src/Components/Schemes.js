import React from 'react'
import Carousel from 'react-elastic-carousel';

const breakPoint = [
    { id: "1" },
    { id: "2" },
    { id: "3" }
]

const Schemes = (props) => {
    return (
        <Carousel breakPoints={breakPoint}>
            <div className="schemes" key={"1"}>
                <div className="heading-scheme">
                    <span>Agriculture Infrastructure Fund</span>
                </div>
                <div className="benifit-schemes">
                    <ol>
                        <li>All loans under this financing facility will have interest subvention of 3% per annum up to a limit of Rs. 2 crore. This subvention will be available for a maximum period of seven years.</li>
                        <li>Further, credit guarantee coverage will be available for eligible borrowers from this financing facility under Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme for a loan up to Rs. 2 crore. The fee for this coverage will be paid by the Government.</li>
                        <li>In case of FPOs the credit guarantee may be availed from the facility created under FPO promotion scheme of Department of Agriculture, Cooperation and Farmers Welfare (DACFW).</li>
                        <li>Moratorium for repayment under this financing facility may vary subject to minimum of 6 months and maximum of 2 years.</li>
                    </ol>
                </div>
                <div className="visit-site">
                    <button><a target="_" href={"http://nhb.gov.in/"}>Go to Website</a></button>
                </div>
            </div>
            <div className="schemes" key={"2"}>
                <div className="heading-scheme">
                    <span>Pradhan Mantri Kisan Samman Nidhi</span>
                </div>
                <div className="benifit-schemes">
                    <ol>
                        <li>Under the PM-KISAN scheme, all landholding farmers' families shall be provided the financial benefit of Rs. 6000 per annum per family payable in three equal installments of Rs. 2000 each, every four months.

                        </li>
                    </ol>
                </div>
                <div className="visit-site">
                    <button><a target="_" href={"https://pmkisan.gov.in/NewHome3.aspx"}>Go to Website</a></button>
                </div>
            </div>
            <div className="schemes" key={"3"}>
                <div className="heading-scheme">
                    <span>Pradhan Mantri Fasal Bima Yojana</span>
                </div>
                <div className="benifit-schemes">
                    <ol>
                        <li>There will be a uniform premium of only 2% to be paid by farmers for all Kharif crops and 1.5% for all Rabi crops. In case of annual commercial and horticultural crops, the premium to be paid by farmers will be only 5%. The premium rates to be paid by farmers are very low and balance premium will be paid by the Government to provide full insured amount to the farmers against crop loss on account of natural calamities.</li>
                        <li>There is no upper limit on Government subsidy. Even if balance premium is 90%, it will be borne by the Government.</li>
                        <li>Earlier, there was a provision of capping the premium rate which resulted in low claims being paid to farmers. This capping was done to limit Government outgo on the premium subsidy. This capping has now been removed and farmers will get claim against full sum insured without any reduction.</li>
                        <li>The use of technology will be encouraged to a great extent. Smart phones will be used to capture and upload data of crop cutting to reduce the delays in claim payment to farmers. Remote sensing will be used to reduce the number of crop cutting experiments.</li>
                        <li>Want to read more visit website</li>
                    </ol>
                </div>
                <div className="visit-site">
                    <button><a target="_" href={"https://pmfby.gov.in/"}>Go to Website</a></button>
                </div>
            </div>
            <div className="schemes" key={"4"}>
                <div className="heading-scheme">
                    <span>KCC Animal husbandry and Fisheries</span>
                </div>
                <div className="benifit-schemes">
                    <ol>
                        <li>Farmers, Dairy/Poultry farmers, Fishers, Fish Farmers either individual or joint borrower, Joint Liability Groups or Self Help Groups including tenant farmers, who are rearing dairy animals/ sheep/ goats/ pigs/ poultry/ birds/ rabbit and having owned/ rented/ leased sheds/ who own or lease registered fishing vessel/boat, possess necessary fishing license/ permission for fishing in estuary and sea, fish farming/ mariculture activities in estuaries and open sea and any other State specific fisheries and allied activities.</li>
                        <li>Farmers who already have KCC based on their land ownership, can get their KCC credit limit enhanced, though interest subvention shall be available only to the extent of Rs 3 lakhs.</li>
                        <li>Want to read more visit website</li>
                    </ol>
                </div>
                <div className="visit-site">
                    <button><a href={"#notFound"}>Go to Website</a></button>
                </div>
            </div>
        </Carousel>
    )
}

export default Schemes
