import { motion } from 'framer-motion';
import { Card } from './Card';
import { Button } from './Button';

export const AttendanceLog = () => {
  const attendanceHistory = [
    { date: "2025-01-08", status: "present", hours: 8 },
    { date: "2025-01-07", status: "present", hours: 8 },
    { date: "2025-01-06", status: "absent", hours: 0 },
    { date: "2025-01-05", status: "present", hours: 6 },
    { date: "2025-01-04", status: "present", hours: 8 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card>
        <h3 className="text-2xl font-bold text-foreground mb-6">Attendance & Daily Log</h3>
        
        <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
          <p className="text-foreground mb-2">Today's Status</p>
          <div className="flex gap-4">
            <Button variant="primary" size="sm">Mark Present</Button>
            <Button variant="outline" size="sm">Submit Daily Report</Button>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Recent Attendance</h4>
          {attendanceHistory.map((entry, index) => (
            <motion.div
              key={entry.date}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex justify-between items-center p-3 border border-border rounded-lg"
            >
              <span className="text-foreground">{entry.date}</span>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">{entry.hours}h</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  entry.status === 'present' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {entry.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};