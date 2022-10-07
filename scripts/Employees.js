import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"
const employees = getEmployees()
const orders = getOrders()

// this section creates a employee name+sales qty pop-up when product is clicked on
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")){
            const [,employeeId] = itemClicked.id.split("--")
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)){
                    let salesQty = 0
                    for (const order of orders) {
                        if (parseInt(employeeId)===order.employeeId){
                            salesQty = salesQty +1
                        }
                    }

                    window.alert(`${employee.name} has made ${salesQty} sales`)
                    
                }
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

