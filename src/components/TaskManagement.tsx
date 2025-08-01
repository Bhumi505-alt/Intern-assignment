import { motion } from 'framer-motion';
import { Card } from './Card';

export const TaskManagement = () => {
  const tasks = [
    { id: 1, title: "Create social media content", deadline: "2025-01-15", status: "in-progress", priority: "high" },
    { id: 2, title: "Research competitor analysis", deadline: "2025-01-20", status: "to-do", priority: "medium" },
    { id: 3, title: "Prepare weekly report", deadline: "2025-01-12", status: "done", priority: "low" },
    { id: 4, title: "Attend team meeting", deadline: "2025-01-10", status: "done", priority: "medium" },
    { id: 5, title: "Design campaign mockups", deadline: "2025-01-25", status: "to-do", priority: "high" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'done': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'to-do': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card>
        <h3 className="text-2xl font-bold text-foreground mb-6">Task Management</h3>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="p-4 border border-border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-foreground">{task.title}</h4>
                <div className="flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs border ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(task.status)}`}>
                    {task.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Due: {task.deadline}</p>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};