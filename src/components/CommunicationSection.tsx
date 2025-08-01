import { motion } from 'framer-motion';
import { Card } from './Card';
import { Button } from './Button';

export const CommunicationSection = () => {
  const messages = [
    {
      from: "Dr. Sarah Johnson",
      message: "Great work on the latest project! Keep it up.",
      time: "2 hours ago",
      unread: true
    },
    {
      from: "HR Department",
      message: "Reminder: Submit your weekly timesheet by Friday.",
      time: "1 day ago",
      unread: false
    },
    {
      from: "Intern Group",
      message: "Anyone interested in joining the lunch meeting today?",
      time: "2 days ago",
      unread: false
    }
  ];

  const forumTopics = [
    { title: "Best practices for social media campaigns", replies: 12, lastActive: "3 hours ago" },
    { title: "Internship experience sharing", replies: 8, lastActive: "1 day ago" },
    { title: "Questions about project deadlines", replies: 5, lastActive: "2 days ago" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      <Card>
        <h3 className="text-2xl font-bold text-foreground mb-6">Communication Hub</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Messages */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-foreground">Recent Messages</h4>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="space-y-3">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`p-3 border rounded-lg ${
                    msg.unread ? 'border-primary bg-primary/5' : 'border-border'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-foreground">{msg.from}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="text-sm text-foreground">{msg.message}</p>
                  {msg.unread && (
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2"></span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Forum */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-foreground">Forum Discussions</h4>
              <Button variant="outline" size="sm">New Topic</Button>
            </div>
            <div className="space-y-3">
              {forumTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="p-3 border border-border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                >
                  <h5 className="font-medium text-foreground mb-1">{topic.title}</h5>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{topic.replies} replies</span>
                    <span>{topic.lastActive}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex gap-4">
            <Button variant="primary">Send Message</Button>
            <Button variant="outline">Ask Question</Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};