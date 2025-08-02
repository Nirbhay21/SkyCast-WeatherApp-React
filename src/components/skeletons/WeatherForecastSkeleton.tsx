import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const WeatherForecastSkeleton = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="relative bg-accent rounded-sm w-40 h-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="gap-4 grid">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="flex flex-wrap justify-between items-center gap-6 p-4 border rounded-lg"
                        >
                            {/* Left - Date + Description */}
                            <div className="space-y-1">
                                <div className="relative bg-accent rounded-sm w-32 h-4 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite" />
                                </div>
                                <div className="relative bg-accent rounded-sm w-24 h-3 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite" />
                                </div>
                            </div>

                            {/* Middle - Min/Max */}
                            <div className="flex sm:flex-row lg:flex-row flex-col md:flex-col sm:gap-4 md:gap-0 lg:gap-3 xl:gap-4">
                                {[...Array(2)].map((_, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="bg-muted rounded-full w-4 h-4 animate-pulse" />
                                        <div className="relative bg-accent rounded-sm w-8 h-4 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right - Humidity + Wind */}
                            <div className="flex flex-row sm:flex-row lg:flex-row md:flex-col xs:flex-col justify-center gap-4 sm:gap-4 md:gap-0 lg:gap-3 xl:gap-4 xs:gap-0 w-full xs:w-auto">
                                {[...Array(2)].map((_, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="bg-muted rounded-full w-4 h-4 animate-pulse" />
                                        <div className="relative bg-accent rounded-sm w-10 h-4 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default WeatherForecastSkeleton;
