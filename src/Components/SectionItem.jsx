
export default function SectionItem({ item, type }) {
    return (
        <div className="section-item">

            <div className="item-left-side">

                <p>{item.startDate}-{item.endDate}</p>
                <p>{item.location}</p>

            </div>

            <div className="item-right-side">
                <p className="item-title">{type == "education" ? item.schoolName : item.companyName}</p>
                <p className="item-role">{type == "education" ? item.degree : item.role}</p>
{/*                 <p>Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android</p>
 */}            </div>

        </div>
    )
}