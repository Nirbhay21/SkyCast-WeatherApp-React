import { Card, CardContent, CardHeader } from "../ui/card";

const WeatherDetailsSkeleton = () => {
    return (
        <Card>
            {/* Header Title Placeholder */}
            <CardHeader>
                <div className="relative bg-accent rounded-sm w-40 h-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite" />
                </div>
            </CardHeader>

            {/* 4 Grid Items */}
            <CardContent>
                <div className="gap-6 grid sm:grid-cols-2">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 p-4 border rounded-lg"
                        >
                            {/* Icon Placeholder */}
                            <div className="relative bg-accent rounded-sm w-6 h-6 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite" />
                            </div>

                            <div className="space-y-1">
                                {/* Title Placeholder */}
                                <div className="relative bg-accent rounded-sm w-24 h-5 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite" />
                                </div>

                                {/* Value Placeholder */}
                                <div className="relative bg-accent rounded-sm w-32 h-3 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default WeatherDetailsSkeleton;
