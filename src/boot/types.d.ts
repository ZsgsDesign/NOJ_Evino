declare interface defaultNOJConfig{
    app: Record<string, unknown>;
    version: Record<string, unknown>;
}

declare interface Window{
    defaultNOJConfig: defaultNOJConfig;
}
