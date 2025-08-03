import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { ProfileSection } from '@/components/ProfileSection';
import { TaskManagement } from '@/components/TaskManagement';
import { AttendanceLog } from '@/components/AttendanceLog';
import { DocumentSection } from '@/components/DocumentSection';
import { FeedbackSection } from '@/components/FeedbackSection';
import { CommunicationSection } from '@/components/CommunicationSection';
const shecanBackground = '/image-uploads/777ca5d3-54e5-40de-bee8-1f454ed80c36.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const [internData, setInternData] = useState<any>(null);
  const [rewards, setRewards] = useState([]);

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
  if (!storedUser || !storedUser.name || !storedUser.email) {
    navigate('/login');
    return;
  }

  fetch('http://localhost:5000/api/dashboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: storedUser.email })  // ✅ use email as in backend
  })
    .then(res => res.json())
    .then(data => {
      setInternData({
        name: data.name,
        referralCode: data.referralCode,
        totalDonations: data.money,
        target: 25000
      });
    })
    .catch(() => navigate('/login'));
}, [navigate]);


  useEffect(() => {
    if (internData) {
      const rewardsList = [
        { name: "Sticker Pack", amount: 500 },
        { name: "Certificate", amount: 1000 },
        { name: "T-Shirt", amount: 2000 },
        { name: "Water Bottle", amount: 5000 },
        { name: "Hoodie", amount: 10000 },
        { name: "Laptop Bag", amount: 15000 },
        { name: "Gift Voucher ₹1000", amount: 20000 },
        { name: "Exclusive Mentorship", amount: 25000 }
      ].map(reward => ({
        ...reward,
        unlocked: internData.totalDonations >= reward.amount
      }));
      setRewards(rewardsList);
    }
  }, [internData]);

  if (!internData) return null;

  const progressPercentage = (internData.totalDonations / internData.target) * 100;

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${shecanBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
      
      <div className="relative z-10">
        <header className="p-4 bg-white/70 backdrop-blur-md border-b border-white/20">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              She Can Dashboard
            </motion.h1>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => navigate('/leaderboard')}>
                Leaderboard
              </Button>
              <Button variant="secondary" onClick={() => {
                localStorage.removeItem('user');
                navigate('/login');
              }}>
                Logout
              </Button>
            </div>
          </div>
        </header>

        <main className="p-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, {internData.name}! 👋
            </h2>
            <p className="text-muted-foreground">
              Keep up the amazing work making a difference!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <CardSection title="Your Referral Code" value={internData.referralCode} note="Share with friends & family" variant="primary" delay={0.3} />
            <CardSection title="Total Donations" value={`₹${internData.totalDonations.toLocaleString()}`} note={`Out of ₹${internData.target.toLocaleString()} target`} variant="secondary" delay={0.4} />
            <ProgressCard value={progressPercentage} delay={0.5} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-foreground mb-6">Rewards & Unlockables</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {rewards.map((reward, index) => (
                  <motion.div
                    key={reward.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className={`p-4 rounded-lg border-2 ${
                      reward.unlocked
                        ? 'border-primary bg-primary/5 text-foreground'
                        : 'border-gray-200 bg-gray-50 text-muted-foreground'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-2xl mb-2 ${reward.unlocked ? '' : 'grayscale'}`}>
                        {reward.unlocked ? '🎉' : '🔒'}
                      </div>
                      <h4 className="font-semibold mb-1">{reward.name}</h4>
                      <p className="text-sm">₹{reward.amount.toLocaleString()}</p>
                      {reward.unlocked && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1 + index * 0.1 }}
                          className="text-xs text-primary font-medium mt-2"
                        >
                          UNLOCKED ✓
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <div className="space-y-8 mt-8">
            <ProfileSection />
            <TaskManagement />
            <AttendanceLog />
            <DocumentSection />
            <FeedbackSection />
            <CommunicationSection />
          </div>
        </main>
      </div>
    </div>
  );
};

// Reusable components
const CardSection = ({ title, value, note, variant, delay }: any) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
    <Card className={`bg-gradient-to-br from-${variant}/10 to-${variant}/5 border-${variant}/20`}>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-3xl font-bold text-${variant} mb-2">{value}</p>
      <p className="text-sm text-muted-foreground">{note}</p>
    </Card>
  </motion.div>
);

const ProgressCard = ({ value, delay }: any) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
    <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
      <h3 className="text-lg font-semibold text-foreground mb-2">Progress</h3>
      <p className="text-3xl font-bold text-accent mb-2">{value.toFixed(1)}%</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ delay: 0.8, duration: 1 }}
          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
        />
      </div>
    </Card>
  </motion.div>
);

export default Dashboard;
