import { motion } from 'framer-motion';
import { Card } from './Card';
import { Button } from './Button';

export const DocumentSection = () => {
  const documents = [
    { name: "Project Report - Week 1", type: "report", uploaded: "2025-01-08", size: "2.3 MB" },
    { name: "Resume Updated", type: "personal", uploaded: "2025-01-05", size: "1.1 MB" },
    { name: "Training Materials", type: "resource", uploaded: "2025-01-03", size: "5.7 MB" },
    { name: "Internship Guidelines", type: "resource", uploaded: "2025-01-01", size: "890 KB" }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'report': return 'bg-blue-100 text-blue-800';
      case 'personal': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Card>
        <h3 className="text-2xl font-bold text-foreground mb-6">Documents</h3>
        
        <div className="mb-6">
          <Button variant="primary">Upload Document</Button>
        </div>

        <div className="space-y-3">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex justify-between items-center p-4 border border-border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{doc.name}</h4>
                <div className="flex items-center gap-4 mt-1">
                  <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(doc.type)}`}>
                    {doc.type}
                  </span>
                  <span className="text-sm text-muted-foreground">{doc.uploaded}</span>
                  <span className="text-sm text-muted-foreground">{doc.size}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Download</Button>
                <Button variant="outline" size="sm">Share</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};