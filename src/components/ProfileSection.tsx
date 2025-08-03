import { motion } from 'framer-motion';
import { Card } from './Card';
import { Input } from './Input';
import { Button } from './Button';

export const ProfileSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card>
        <h3 className="text-2xl font-bold text-foreground mb-6">Profile Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <Input label="Name" value="dummy static value" readOnly />
<Input label="Role" value="Marketing Intern" readOnly />
<Input label="Project" value="Digital Outreach Campaign" readOnly />
<Input label="Email" value="dummy@shecan.org" readOnly />
<Input label="Phone" value="+91 98765 43210" readOnly />
<Input label="Department" value="Marketing & Communications" readOnly />

        </div>
        <div className="mt-6 flex gap-4">
          {/* <Button variant="primary">Save Changes</Button>
          <Button variant="outline">Cancel</Button> */}
        </div>
      </Card>
    </motion.div>
  );
};