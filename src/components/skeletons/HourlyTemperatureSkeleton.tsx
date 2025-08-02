import { Card, CardContent, CardHeader } from "../ui/card";

const HourlyTemperatureSkeleton = () => {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="relative bg-accent rounded-sm w-40 h-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="relative bg-accent rounded-md w-full h-[186px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                </div>
            </CardContent>
        </Card>
    );
};

export default HourlyTemperatureSkeleton;
