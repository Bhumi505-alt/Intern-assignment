import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
const shecanLogo = '/image-uploads/777ca5d3-54e5-40de-bee8-1f454ed80c36.png';

const Leaderboard = () => {
  const navigate = useNavigate();
  
  // Dummy leaderboard data
  const leaderboardData = [
    { rank: 1, name: "Ananya Gupta", donations: 28500, referralCode: "ananya2025" },
    { rank: 2, name: "Ravi Kumar", donations: 23200, referralCode: "ravi2025" },
    { rank: 3, name: "Priya Sharma", donations: 15750, referralCode: "priya2025", isCurrentUser: true },
    { rank: 4, name: "Sneha Patel", donations: 14200, referralCode: "sneha2025" },
    { rank: 5, name: "Arjun Singh", donations: 12800, referralCode: "arjun2025" },
    { rank: 6, name: "Kavya Nair", donations: 11500, referralCode: "kavya2025" },
    { rank: 7, name: "Rohit Sharma", donations: 10900, referralCode: "rohit2025" },
    { rank: 8, name: "Meera Reddy", donations: 9750, referralCode: "meera2025" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return "🥇";
      case 2: return "🥈";
      case 3: return "🥉";
      default: return `#${rank}`;
    }
  };

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${shecanLogo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="p-4 bg-white/70 backdrop-blur-md border-b border-white/20">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              She Can Leaderboard
            </motion.h1>
            <Button 
              variant="outline"
              onClick={() => navigate('/dashboard')}
            >
              Back to Dashboard
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Top Fundraisers 🏆
            </h2>
            <p className="text-muted-foreground">
              See how you're making a difference alongside fellow interns
            </p>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <div className="space-y-3">
                {leaderboardData.map((intern, index) => (
                  <motion.div
                    key={intern.referralCode}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                      intern.isCurrentUser
                        ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-primary min-w-[60px]">
                        {getRankIcon(intern.rank)}
                      </div>
                      <div>
                        <h3 className={`font-semibold ${intern.isCurrentUser ? 'text-primary' : 'text-foreground'}`}>
                          {intern.name} {intern.isCurrentUser && '(You)'}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Code: {intern.referralCode}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">
                        ₹{intern.donations.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Total raised
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Motivation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Keep Going! 💪
                </h3>
                <p className="text-muted-foreground mb-4">
                  Every donation makes a real difference in someone's life. 
                  Share your referral code and climb the leaderboard!
                </p>
                <Button 
                  onClick={() => navigate('/dashboard')}
                  className="bg-gradient-to-r from-primary to-secondary"
                >
                  Continue Fundraising
                </Button>
              </div>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Leaderboard;