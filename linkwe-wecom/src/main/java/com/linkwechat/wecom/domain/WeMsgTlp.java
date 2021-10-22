package com.linkwechat.wecom.domain;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.linkwechat.common.core.domain.BaseEntity;
import com.linkwechat.common.utils.SnowFlakeUtil;
import com.linkwechat.wecom.handler.GenericTypeHandler;
import io.swagger.models.auth.In;
import lombok.Data;

import java.util.List;


/**
 * 欢迎语模板对象 we_msg_tlp
 * 
 * @author ruoyi
 * @date 2020-10-04
 */
@Data
@TableName(value = "we_msg_tlp",autoResultMap = true)
public class WeMsgTlp extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** $column.columnComment */
    @TableId
    private Long id;

    /** 欢迎语 */
    private String welcomeMsg;



    /**图片url*/
    private String picUrl;

    /**图文*/
    @TableField(typeHandler = GenericTypeHandler.class)
    private List<ImageText> imageText;



    /**小程序*/
    @TableField(typeHandler = GenericTypeHandler.class)
    private List<Applet> applet;


    /** 0:正常;1:删除; */
    private Integer delFlag;

    /** 欢迎语模板类型:1:活码欢迎语;2:员工欢迎语;3:入群欢迎语 */
    private Integer welcomeMsgTplType;


    /**用户名 */
    private String userNames;

    /**用户id，用逗号隔开*/
    private String userIds;


    @Data
    public static  class  Applet{

        //小程序标题
        private String appTile;

        //小程序id
        private String appId;

        //小程序路径
        private String appPath;

        //小程序图片
        private String appPic;

    }

    @Data
   public static class ImageText{

        //图文标题
        private String imageTextTile;

        //图文url
        private String imageTextUrl;

    }



}
