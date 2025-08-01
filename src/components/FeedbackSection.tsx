import { motion } from 'framer-motion';
import { Card } from './Card';

export const FeedbackSection = () => {
  const feedback = [
    {
      mentor: "Dr. Sarah Johnson",
      date: "2025-01-07",
      rating: 4.5,
      comment: "Excellent work on the social media campaign. Shows great creativity and attention to detail.",
      category: "Project Work"
    },
    {
      mentor: "Mr. Raj Patel",
      date: "2025-01-03",
      rating: 4.0,
      comment: "Good progress on research tasks. Could improve on time management.",
      category: "General Performance"
    },
    {
      mentor: "Ms. Anita Sharma",
      date: "2024-12-28",
      rating: 5.0,
      comment: "Outstanding presentation skills. Very confident and well-prepared.",
      category: "Communication"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <Card>
        <h3 className="text-2xl font-bold text-foreground mb-6">Feedback & Evaluation</h3>
        
        <div className="mb-6 p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">4.5/5.0</p>
            <p className="text-muted-foreground">Overall Rating</p>
            <div className="flex justify-center mt-2">
              {renderStars(4.5)}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {feedback.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="p-4 border border-border rounded-lg"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-foreground">{item.mentor}</h4>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
                <div className="text-right">
                  <div className="flex">{renderStars(item.rating)}</div>
                  <span className="text-sm text-muted-foreground">{item.rating}/5.0</span>
                </div>
              </div>
              <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-2">
                {item.category}
              </span>
              <p className="text-foreground">{item.comment}</p>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};