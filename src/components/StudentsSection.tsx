import { User, Award, TrendingUp, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const StudentsSection = () => {
  const achievements = [
    {
      title: "Global Rankings",
      description: "Students in top 1% globally",
      icon: TrendingUp,
      metric: "Top 1%"
    },
    {
      title: "Competitions",
      description: "International CTF events",
      icon: Award,
      metric: "15+ CTFs"
    },
    {
      title: "Internships",
      description: "Leading tech companies",
      icon: Globe,
      metric: "50+ Placements"
    }
  ];

  const topStudents = [
    {
      name: "Alex Johnson",
      level: "400 Level",
      specialization: "Penetration Testing",
      achievement: "TryHackMe Top 500",
      initials: "AJ"
    },
    {
      name: "Sarah Williams",
      level: "300 Level", 
      specialization: "Digital Forensics",
      achievement: "CTF Champion 2024",
      initials: "SW"
    },
    {
      name: "Michael Chen",
      level: "400 Level",
      specialization: "Malware Analysis",
      achievement: "Research Published",
      initials: "MC"
    },
    {
      name: "Fatima Ahmed",
      level: "200 Level",
      specialization: "Network Security",
      achievement: "Cisco Scholarship",
      initials: "FA"
    }
  ];

  return (
    <section id="students" className="py-16 sm:py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Our <span className="text-cyber-gold">Students</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4 sm:px-0">
            Brilliant minds shaping the future of cybersecurity through competitions and research.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-14 md:mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="border-0 bg-card/50 text-center">
              <CardHeader className="pb-2">
                <div className="p-2 rounded-lg bg-cyber-gold/10 w-fit mx-auto mb-3">
                  <achievement.icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyber-gold" />
                </div>
                <CardTitle className="text-base sm:text-lg">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-cyber-gold mb-2">{achievement.metric}</div>
                <p className="text-xs sm:text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-lg sm:text-xl font-bold text-center">
            Featured <span className="text-cyber-gold">Students</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {topStudents.map((student, index) => (
              <Card key={index} className="border-0 bg-card/50">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                      <AvatarFallback className="bg-cyber-gold/10 text-cyber-gold text-xs sm:text-sm font-medium">
                        {student.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{student.name}</h4>
                      <p className="text-xs text-muted-foreground truncate">{student.level} • {student.specialization}</p>
                      <div className="text-xs text-cyber-gold mt-1 truncate">{student.achievement}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};