import { Card, CardContent } from "../ui/card";

const CurrentWeatherSkeleton = ({ skeletonFor }: {skeletonFor: "WeatherDashboard" | "CityPage"}) => {

    return (
        <Card className="md:h-[300px]">
            <CardContent className="p-6">
                <div className="gap-6 grid md:grid-cols-2">
                    {/* Left section */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            {/* Location name + state */}
                            {(skeletonFor === "WeatherDashboard") && (
                                <>
                                    <div className="flex items-end gap-2 mt-2">
                                        <div className="relative bg-accent rounded-sm w-30 h-6 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                                        </div>
                                        <div className="relative bg-accent rounded-sm w-20 h-4 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                                        </div>
                                    </div>

                                    {/* Country */}
                                    <div className="relative bg-accent mb-4 rounded-sm w-12 h-4 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                                    </div>
                                </>
                            )}

                            {/* Temperature + feels like + min/max */}
                            <div className="flex items-center gap-3">
                                <div className="relative bg-accent rounded-sm w-24 h-16 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                                </div>

                                <div className="space-y-3">
                                    <div className="relative bg-accent rounded-sm w-32 h-4 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="relative bg-accent rounded-sm w-14 h-4 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                                        </div>
                                        <div className="relative bg-accent rounded-sm w-14 h-4 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Humidity and Wind */}
                        <div className="gap-4 grid grid-cols-2">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex items-center gap-2 mt-1 -ml-1">
                                    <div className="bg-muted rounded-full w-5 h-5 animate-pulse"></div>
                                    <div className="space-y-3">
                                        <div className="relative bg-accent rounded-sm w-20 h-4 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                                        </div>
                                        <div className="relative bg-accent rounded-sm w-16 h-4 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right section (Weather icon + description) */}
                    <div className="flex flex-col justify-center items-center gap-3 mt-11 md:mt-0 pt-4">
                        <div className="relative bg-accent rounded-md w-[140px] h-[105px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                        </div>
                        <div className="relative bg-accent mt-2 rounded-sm w-24 h-4 text-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CurrentWeatherSkeleton;
