import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '../ui/Button';

export function AuthButton() {
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <Button onClick={handleSignIn} variant="outline" size="sm">
      Sign In
    </Button>
  );
}