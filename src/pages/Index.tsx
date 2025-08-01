import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button';
import shecanLogo from '@/assets/shecan-logo.png';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${shecanLogo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl px-4"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          She Can Foundation
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-muted-foreground mb-8"
        >
          Empowering interns to make a difference. Join our fundraising community 
          and unlock amazing rewards while creating positive impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg"
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-primary to-secondary text-white"
          >
            Get Started
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => navigate('/signup')}
          >
            Create Account
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-foreground">Set Goals</h3>
            <p className="text-sm text-muted-foreground">Track your fundraising progress</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">🎁</div>
            <h3 className="font-semibold text-foreground">Earn Rewards</h3>
            <p className="text-sm text-muted-foreground">Unlock amazing prizes</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">🏆</div>
            <h3 className="font-semibold text-foreground">Compete</h3>
            <p className="text-sm text-muted-foreground">Rise up the leaderboard</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
