import AddCustomerForm from "./AddCustomerForm";
import { BreadcrumbAdmin } from "@/components";

const AddCustomer = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin
          title="Add Customer"
          subtitle="Customers"
          link="/admin/customers"
        />
        <AddCustomerForm />
      </div>
    </div>
  );
};

export default AddCustomer;
