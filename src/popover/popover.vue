<template>
    <div class="s-popover" ref="popover">
        <div
            :class="['content-wrapper', {[`position-${position}`]: true}]"
            v-if="visible"
            ref="contentWrapper"
        >
            <slot name="content"  :close="close"></slot>
        </div>
        <span ref="triggerWrapper" class="trigger-wrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    },
    mounted() {
      this.timer = null;
      if(this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick)
      }else {
        this.$refs.popover.addEventListener('mouseenter', ()=>{
          console.log('mouseenter popover');
          this.open();
          this.hoverContentWrapper()
        });
        this.$refs.popover.addEventListener('mouseleave', ()=>{
          this.timer = setTimeout(this.close,200);
          console.log('mouseleave popover');
        });
      }
    },
    destroyed () {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open);
        this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
    },
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) >= 0;
        }
      }
    },
    methods: {
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          //click button
          if (this.visible === true) {
            this.close();
          } else {
            //click content
            this.open();
          }
        }
      },
      positionContent() {
        const { contentWrapper, triggerWrapper } = this.$refs;
        document.body.appendChild(contentWrapper);
        const { width, height, top, left } = triggerWrapper.getBoundingClientRect();
        const { height: contentHeight } = contentWrapper.getBoundingClientRect();
        const positions = {
          top: {
            left: left + window.scrollX,
            top: top + window.scrollY
          },
          bottom: {
            left: left + window.scrollX,
            top: top + height + window.scrollY
          },
          left: {
            left: left + window.scrollX,
            top: top + (height - contentHeight) / 2 + window.scrollY
          },
          right: {
            left: left + width + window.scrollX,
            top: top + (height - contentHeight) / 2 + window.scrollY
          }
        };
        contentWrapper.style.left = positions[this.position].left + 'px';
        contentWrapper.style.top = positions[this.position].top + 'px';
      },
      open() {
        this.visible = true;
        this.$nextTick(() => {
          this.positionContent();
          document.addEventListener('click', this.onClickDocument);
        });
      },
      close() {
        this.visible = false;
        document.removeEventListener('click', this.onClickDocument);
      },
      onClickDocument(e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) {
          return;
        }
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
        ) {
          return;
        }
        this.close();
      },
      mouseEnterContentWrapper() {
        console.log('mouseenter content');
        clearTimeout(this.timer);
        this.open();
      },
      mouseLeaveContentWrapper() {
        this.close();
        this.$refs.contentWrapper.removeEventListener('mouseenter', this.mouseEnterContentWrapper);
        this.$refs.contentWrapper.removeEventListener('mouseleave', this.mouseLeaveContentWrapper)
      },
      hoverContentWrapper(){
        this.$nextTick(()=>{
          if(this.$refs.contentWrapper) {
            console.log('content add');
            this.$refs.contentWrapper.addEventListener('mouseenter', this.mouseEnterContentWrapper);
            this.$refs.contentWrapper.addEventListener('mouseleave', this.mouseLeaveContentWrapper)
          }
        })
      }
    }
  };
</script>
<style scoped lang="scss">
    $border-color: #333;
    $border-radius: 4px;
    .s-popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .trigger-wrapper {
        display: inline-block;
    }

    .content-wrapper {
        position: absolute;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: white;
        padding: .5em 1em;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            position: absolute;
            border: 10px solid transparent;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;

            &::before, &::after {
                left: 10px;
                border-bottom: none;
            }

            &::before {
                border-top-color: $border-color;
                top: calc(100%);
            }

            &::after {
                top: calc(100% - 1px);
                border-top-color: white;
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before, &::after {
                left: 10px;
                border-top: none;
            }

            &::before {
                border-bottom-color: $border-color;
                bottom: 100%;
            }

            &::after {
                bottom: calc(100% - 1px);
                border-bottom-color: white;
            }
        }

        &.position-left {
            margin-left: -10px;
            transform: translateX(-100%);

            &::before, &::after {
                top: 50%;
                border-right: none;
                transform: translateY(-50%);
            }

            &::before {
                border-left-color: $border-color;
                left: 100%;
            }

            &::after {
                left: calc(100% - 1px);
                border-left-color: white;
            }
        }

        &.position-right {
            margin-left: 10px;

            &::before, &::after {
                top: 50%;
                border-left: none;
                transform: translateY(-50%);
            }

            &::before {
                border-right-color: $border-color;
                right: 100%;
            }

            &::after {
                right: calc(100% - 1px);
                border-right-color: white;
            }
        }
    }
</style>