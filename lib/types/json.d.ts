/** @module Types/JSON */
/* eslint-disable @typescript-eslint/no-empty-interface */
import type { InstallParams, TeamMember } from "./oauth";
import type { ApplicationCommandOptions } from "./application-commands";
import type {
    ApplicationCommandInteractionData,
    AutocompleteInteractionData,
    MessageComponentButtonInteractionData,
    MessageComponentSelectMenuInteractionData,
    ModalSubmitInteractionData
} from "./interactions";
import type { AutoModerationAction, TriggerMetadata } from "./auto-moderation";
import type {
    GuildEmoji,
    IntegrationAccount,
    RawGuild,
    RoleTags,
    RawSticker,
    WelcomeScreen,
    Sticker
} from "./guilds";
import type {
    ChannelMention,
    MessageActivity,
    MessageReference,
    RawChannel,
    StickerItem,
    MessageReaction,
    ThreadMetadata,
    PrivateThreadMetadata,
    ForumTag,
    ForumEmoji,
    MessageActionRow,
    Embed
} from "./channels";
import type { ScheduledEventEntityMetadata } from "./scheduled-events";
import type { Presence } from "./gateway";
import type {
    ApplicationCommandTypes,
    AutoModerationEventTypes,
    AutoModerationTriggerTypes,
    ChannelTypes,
    DefaultMessageNotificationLevels,
    ExplicitContentFilterLevels,
    GuildChannelTypes,
    GuildFeature,
    GuildNSFWLevels,
    IntegrationExpireBehaviors,
    IntegrationType,
    InteractionTypes,
    InviteTargetTypes,
    MessageTypes,
    MFALevels,
    OverwriteTypes,
    PremiumTiers,
    PrivateChannelTypes,
    RESTMethod,
    GuildScheduledEventEntityTypes,
    GuildScheduledEventPrivacyLevels,
    GuildScheduledEventStatuses,
    TextChannelTypes,
    ThreadAutoArchiveDuration,
    ThreadChannelTypes,
    VerificationLevels,
    VideoQualityModes,
    WebhookTypes,
    SortOrderTypes,
    StageInstancePrivacyLevels
} from "../Constants";

export interface JSONAnnouncementChannel extends JSONTextableChannel {
    rateLimitPerUser: 0;
    threads: Array<string>;
    type: ChannelTypes.GUILD_ANNOUNCEMENT;
}
export interface JSONAnnouncementThreadChannel extends JSONThreadChannel {
    threadMetadata: ThreadMetadata;
    type: ChannelTypes.ANNOUNCEMENT_THREAD;
}
export interface JSONApplication extends JSONClientApplication {
    botPublic: boolean;
    botRequireCodeGrant: boolean;
    coverImage: string | null;
    customInstallURL?: string;
    description: string;
    guildID?: string;
    icon: string | null;
    installParams?: InstallParams;
    name: string;
    ownerID: string;
    primarySKUID?: string;
    privacyPolicyURL?: string;
    rpcOrigins: Array<string>;
    slug?: string;
    tags?: Array<string>;
    team: JSONTeam | null;
    termsOfServiceURL?: string;
    verifyKey: string;
}
export interface JSONApplicationCommand extends JSONBase {
    applicationID: string;
    defaultMemberPermissions?: JSONPermission;
    description: string;
    descriptionLocalizations?: Record<string, string> | null;
    dmPermission?: boolean;
    guildID?: string;
    name: string;
    nameLocalizations?: Record<string, string> | null;
    options?: Array<ApplicationCommandOptions>;
    type: ApplicationCommandTypes;
    version: string;
}
export interface JSONAttachment extends JSONBase {
    contentType?: string;
    description?: string;
    ephemeral?: boolean;
    filename: string;
    height?: number;
    proxyURL: string;
    size: number;
    url: string;
    width?: number;
}
export interface JSONAutocompleteInteraction extends JSONInteraction {
    appPermissions?: JSONPermission;
    channel: string;
    data: AutocompleteInteractionData;
    guildID?: string;
    guildLocale?: string;
    locale: string;
    member?: JSONMember;
    type: InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE;
    user: JSONUser;
}
export interface JSONAutoModerationRule extends JSONBase {
    actions: Array<AutoModerationAction>;
    creatorID: string;
    enabled: boolean;
    eventType: AutoModerationEventTypes;
    exemptChannels: Array<string>;
    exemptRoles: Array<string>;
    guildID: string;
    name: string;
    triggerMetadata: TriggerMetadata;
    triggerType: AutoModerationTriggerTypes;
}
export interface JSONBase {
    createdAt: number;
    id: string;
}
export interface JSONCategoryChannel extends JSONGuildChannel {
    channels: Array<string>;
    permissionOverwrites: Array<JSONPermissionOverwrite>;
    position: number;
    type: ChannelTypes.GUILD_CATEGORY;
}
export interface JSONChannel extends JSONBase {
    type: ChannelTypes;
}
export interface JSONClientApplication extends JSONBase {
    flags: number;
}
export interface JSONClientUser extends JSONUser {
    email: string | null;
    flags: number;
    locale: string;
    mfaEnabled: boolean;
    verified: boolean;
}
export interface JSONCommandInteraction extends JSONInteraction {
    appPermissions?: JSONPermission;
    channelID: string;
    data: ApplicationCommandInteractionData;
    guildID?: string;
    guildLocale?: string;
    locale: string;
    member?: JSONMember;
    type: InteractionTypes.APPLICATION_COMMAND;
    user: JSONUser;
}
export interface JSONComponentInteraction extends JSONInteraction {
    appPermissions?: JSONPermission;
    channelID: string;
    data: MessageComponentButtonInteractionData | MessageComponentSelectMenuInteractionData;
    guildID?: string;
    guildLocale?: string;
    locale: string;
    member?: JSONMember;
    type: InteractionTypes.MESSAGE_COMPONENT;
    user: JSONUser;
}
export interface JSONDiscordHTTPError {
    message: string;
    method: RESTMethod;
    name: string;
    resBody: Record<string, unknown> | null;
    stack: string;
}
export interface JSONDiscordRESTError {
    message: string;
    method: RESTMethod;
    name: string;
    resBody: Record<string, unknown> | null;
    stack: string;
}
export interface JSONExtendedUser extends JSONUser {
    email: string | null;
    flags: number;
    locale?: string;
    mfaEnabled: boolean;
    verified: boolean;
}
export interface JSONForumChannel extends JSONGuildChannel {
    availableTags: Array<ForumTag>;
    defaultAutoArchiveDuration: ThreadAutoArchiveDuration;
    defaultReactionEmoji: ForumEmoji | null;
    defaultSortOrder: SortOrderTypes | null;
    defaultThreadRateLimitPerUser: number;
    flags: number;
    lastThreadID: string | null;
    permissionOverwrites: Array<JSONPermissionOverwrite>;
    position: number;
    rateLimitPerUser: number;
    template: string;
    threads: Array<string>;
    topic: string | null;
}
export interface JSONGroupChannel extends JSONChannel {
    applicationID: string;
    icon: string | null;
    managed: boolean;
    name: string | null;
    nicks: Array<Record<"id" | "nick", string>>;
    ownerID: string;
    recipients: Array<JSONUser>;
    type: ChannelTypes.GROUP_DM;
}
export interface JSONGuild extends JSONBase {
    afkChannelID: string | null;
    afkTimeout: number;
    application?: string;
    approximateMemberCount?: number;
    approximatePresenceCount?: number;
    autoModerationRules: Array<JSONAutoModerationRule>;
    banner: string | null;
    channels: Array<string>;
    defaultMessageNotifications: DefaultMessageNotificationLevels;
    description: string | null;
    discoverySplash: string | null;
    emojis: Array<GuildEmoji>;
    explicitContentFilter: ExplicitContentFilterLevels;
    features: Array<GuildFeature>;
    icon: string | null;
    joinedAt: number | null;
    large: boolean;
    maxMembers?: number;
    maxPresences?: number;
    maxStageVideoChannelUsers?: number;
    maxVideoChannelUsers?: number;
    memberCount: number;
    members: Array<string>;
    mfaLevel: MFALevels;
    name: string;
    nsfwLevel: GuildNSFWLevels;
    ownerID: string;
    permissions?: JSONPermission;
    preferredLocale: string;
    premiumProgressBarEnabled: boolean;
    premiumSubscriptionCount?: number;
    premiumTier: PremiumTiers;
    publicUpdatesChannelID: string | null;
    region?: string | null;
    roles: Array<JSONRole>;
    rulesChannelID: string | null;
    scheduledEvents: Array<JSONScheduledEvent>;
    splash: string | null;
    stageInstances: Array<JSONStageInstance>;
    stickers?: Array<Sticker>;
    systemChannelFlags: number;
    systemChannelID: string | null;
    threads: Array<string>;
    unavailable: boolean;
    vanityURLCode: string | null;
    verificationLevel: VerificationLevels;
    voiceStates: Array<JSONVoiceState>;
    welcomeScreen?: WelcomeScreen;
    widgetChannelID: string | null;
    widgetEnabled?: boolean;
}
export interface JSONGuildChannel extends JSONChannel {
    guildID: string;
    name: string;
    parentID: string | null;
    type: GuildChannelTypes;
}
export interface JSONGuildPreview extends JSONBase {
    approximateMemberCount: number;
    approximatePresenceCount: number;
    description: string | null;
    discoverySplash: string | null;
    emojis: Array<GuildEmoji>;
    features: Array<GuildFeature>;
    icon: string | null;
    name: string;
    splash: string | null;
    stickers: Array<RawSticker>;
}
export interface JSONGuildTemplate {
    code: string;
    createdAt: number;
    creator: JSONUser;
    description: string | null;
    isDirty: boolean | null;
    name: string;
    serializedSourceGuild: Partial<RawGuild>;
    sourceGuildID: string;
    updatedAt: number;
    usageCount: number;
}
export interface JSONIntegration extends JSONBase {
    account: IntegrationAccount;
    application?: JSONPartialApplication;
    enableEmoticons?: boolean;
    enabled?: boolean;
    expireBehavior?: IntegrationExpireBehaviors;
    expireGracePeriod?: number;
    name: string;
    revoked?: boolean;
    roleID: string | null;
    scopes?: Array<string>;
    subscriberCount?: number;
    syncedAt?: number;
    syncing?: boolean;
    type: IntegrationType;
    user?: JSONUser;
}
export interface JSONInteraction extends JSONBase {
    applicationID: string;
    token: string;
    type: InteractionTypes;
    version: 1;
}
export interface JSONInvite {
    approximateMemberCount?: number;
    approximatePresenceCount?: number;
    channelID?: string;
    code: string;
    createdAt?: number;
    expiresAt?: number;
    guildID?: string;
    guildScheduledEvent?: JSONScheduledEvent;
    inviter?: string;
    maxAge?: number;
    maxUses?: number;
    stageInstance?: {
        members: Array<string>;
        participantCount: number;
        speakerCount: number;
        topic: string;
    };
    targetApplication?: JSONPartialApplication;
    targetType?: InviteTargetTypes;
    targetUser?: string;
    temporary?: boolean;
    uses?: number;
}
export interface JSONMember extends JSONBase {
    avatar: string | null;
    communicationDisabledUntil: number | null;
    deaf: boolean;
    flags?: number;
    guildID: string;
    isPending?: boolean;
    joinedAt: number | null;
    mute: boolean;
    nick: string | null;
    pending: boolean;
    premiumSince: number | null;
    presence?: Presence;
    roles: Array<string>;
    user: JSONUser;
}
export interface JSONMessage extends JSONBase {
    activity?: MessageActivity;
    applicationID?: string;
    attachments: Array<JSONAttachment>;
    author: JSONUser;
    channelID: string;
    components?: Array<MessageActionRow>;
    content: string;
    editedTimestamp: number | null;
    embeds: Array<Embed>;
    flags?: number;
    guildID?: string;
    interaction?: {
        id: string;
        member?: JSONMember;
        name: string;
        type: InteractionTypes;
        user: JSONUser;
    };
    mentionChannels?: Array<ChannelMention>;
    mentions: {
        channels: Array<string>;
        everyone: boolean;
        members: Array<JSONMember>;
        roles: Array<string>;
        users: Array<JSONUser>;
    };
    messageReference?: MessageReference;
    nonce?: number | string;
    pinned: boolean;
    position?: number;
    reactions: Record<string, MessageReaction>;
    referencedMessage?: JSONMessage | null;
    stickerItems?: Array<StickerItem>;
    thread?: JSONAnnouncementThreadChannel | JSONPublicThreadChannel | JSONPrivateThreadChannel;
    timestamp: number;
    tts: boolean;
    type: MessageTypes;
    webhook?: string;
}
export interface JSONModalSubmitInteraction extends JSONInteraction {
    appPermissions?: JSONPermission;
    channelID: string;
    data: ModalSubmitInteractionData;
    guildID?: string;
    guildLocale?: string;
    locale: string;
    member?: JSONMember;
    type: InteractionTypes.MODAL_SUBMIT;
    user: JSONUser;
}
export interface JSONPartialApplication extends JSONBase {
    botPublic?: boolean;
    botRequireCodeGrant?: boolean;
    description: string;
    icon: string | null;
    name: string;
    verifyKey?: string;
}
export interface JSONPermission {
    allow: string;
    deny: string;
}
export interface JSONPermissionOverwrite extends JSONBase {
    permission: JSONPermission;
    type: OverwriteTypes;
}
export interface JSONPingInteraction extends JSONInteraction {
    type: InteractionTypes.PING;
}
export interface JSONPrivateChannel extends JSONChannel {
    lastMessageID: string | null;
    messages: Array<string>;
    recipient: JSONUser;
    type: ChannelTypes.DM;
}
export interface JSONPrivateThreadChannel extends JSONThreadChannel {
    threadMetadata: PrivateThreadMetadata;
    type: ChannelTypes.PRIVATE_THREAD;
}
export interface JSONPublicThreadChannel extends JSONThreadChannel {
    appliedTags: Array<string>;
    threadMetadata: ThreadMetadata;
    type: ChannelTypes.PUBLIC_THREAD;
}
export interface JSONRole extends JSONBase {
    color: number;
    guildID: string;
    hoist: boolean;
    icon: string | null;
    managed: boolean;
    mentionable: boolean;
    name: string;
    permissions: JSONPermission;
    position: number;
    tags: RoleTags;
    unicodeEmoji: string | null;
}
export interface JSONScheduledEvent extends JSONBase {
    channelID: string | null;
    creator?: JSONUser;
    description?: string | null;
    entityID: string | null;
    entityMetadata: ScheduledEventEntityMetadata | null;
    entityType: GuildScheduledEventEntityTypes;
    guildID: string;
    image?: string | null;
    name: string;
    privacyLevel: GuildScheduledEventPrivacyLevels;
    scheduledEndTime: number | null;
    scheduledStartTime: number;
    status: GuildScheduledEventStatuses;
    userCount?: number;
}
export interface JSONStageChannel extends JSONGuildChannel {
    bitrate: number;
    permissionOverwrites: Array<JSONPermissionOverwrite>;
    position: number;
    rtcRegion: string | null;
    topic: string | null;
    type: ChannelTypes.GUILD_STAGE_VOICE;
}
export interface JSONStageInstance extends JSONBase {
    channelID: string;
    discoverableDisabled: boolean;
    guildID: string;
    privacyLevel: StageInstancePrivacyLevels;
    scheduledEventID: string | null;
    topic: string;
}
export interface JSONTeam extends JSONBase {
    icon: string | null;
    members: Array<TeamMember>;
    name: string;
    ownerID: string;
}
export interface JSONTextableChannel extends JSONGuildChannel {
    defaultAutoArchiveDuration: ThreadAutoArchiveDuration;
    lastMessageID: string | null;
    messages: Array<string>;
    nsfw: boolean;
    permissionOverwrites: Array<JSONPermissionOverwrite>;
    position: number;
    rateLimitPerUser: number;
    topic: string | null;
    type: Exclude<TextChannelTypes, PrivateChannelTypes>;
}
export interface JSONTextChannel extends JSONTextableChannel {
    threads: Array<string>;
    type: ChannelTypes.GUILD_TEXT;
}
export interface JSONThreadChannel extends JSONGuildChannel {
    flags: number;
    lastMessageID: string | null;
    memberCount: number;
    messageCount: number;
    messages: Array<string>;
    ownerID: string;
    rateLimitPerUser: number;
    threadMetadata: ThreadMetadata | PrivateThreadMetadata;
    totalMessageSent: number;
    type: ThreadChannelTypes;
}
export interface JSONUnavailableGuild extends JSONBase {
    unavailable: true;
}
export interface JSONUser extends JSONBase {
    accentColor?: number | null;
    avatar: string | null;
    banner?: string | null;
    bot: boolean;
    discriminator: string;
    publicFlags: number;
    system: boolean;
    username: string;
}
export interface JSONVoiceChannel extends JSONGuildChannel {
    bitrate: number;
    messages: Array<string>;
    nsfw: boolean;
    permissionOverwrites: Array<JSONPermissionOverwrite>;
    position: number;
    rtcRegion: string | null;
    topic: string | null;
    type: ChannelTypes.GUILD_VOICE;
    userLimit: number;
    videoQualityMode: VideoQualityModes;
    voiceMembers: Array<string>;
}
export interface JSONVoiceState extends JSONBase {
    channelID: string | null;
    deaf: boolean;
    guildID?: string;
    member?: JSONMember;
    mute: boolean;
    requestToSpeakTimestamp: number | null;
    selfDeaf: boolean;
    selfMute: boolean;
    selfStream: boolean;
    selfVideo: boolean;
    sessionID: string;
    suppress: boolean;
    user?: JSONUser;
}
export interface JSONWebhook extends JSONBase {
    applicationID: string | null;
    avatar: string | null;
    channelID: string | null;
    guildID: string | null;
    name: string | null;
    sourceChannel?: Pick<RawChannel, "id" | "name">;
    sourceGuild?: Pick<RawGuild, "id" | "name" | "icon">;
    token?: string;
    type: WebhookTypes;
    user?: JSONUser;
}
