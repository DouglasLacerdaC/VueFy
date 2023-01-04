<script>

export default {
    name: 'ItemFriendList',
    props: {
        friend: {
            avatarUrl: String,
            name: String,
            genre: String,
            activity: String
        }
    }
}

</script>

<template>
    <div class="item-friend">
        <div class="avatar">
            <div class="status" :class="friend.activity"></div>
            <img :src="friend.avatarUrl" alt="">
        </div>
        <div class="informations">
            <span>{{ friend.name }}</span>
            <span class="genre">{{ friend.genre }}</span>            
        </div>
    </div>
</template>

<style scoped>

.item-friend {
    display: flex;
    align-items: center;
    gap: 10px;
    user-select: none;
}

.item-friend .avatar {
    position: relative;
}

.item-friend .avatar .status {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.item-friend .avatar .status.online {
    background-color: rgb(0, 153, 255);
}

.item-friend .avatar .status.offline {
    opacity: 0;
}

.item-friend .avatar img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: fill;
}

.item-friend span {
    display: block;
    font-size: 12px;
}

.item-friend span:hover {
    text-decoration: underline;
    color: var(--white) !important;
}

.item-friend span.genre {
    color: #ffffff80;
}

</style>