# Homestead 开启 NFS 后启动需要密码

## Homestead 开启 NFS

在 Homestead 中配置 NFS

``` yaml {4}
folders:
    - map: ~/code
      to: /home/vagrant/code
      type: "nfs"
```

使用 `vagrant reload --provision` 重启 Homestead，此时终端提示需要密码。

根据 Vagrant 文档 [NFS - Synced Folders | Vagrant by HashiCorp][1] 赋予 ROOT 权限

## 赋予 ROOT 权限

对于 OS X  

``` bash
vim /etc/sudoers.d/vagrant-syncedfolders
```

```
Cmnd_Alias VAGRANT_EXPORTS_ADD = /usr/bin/tee -a /etc/exports
Cmnd_Alias VAGRANT_NFSD = /sbin/nfsd restart
Cmnd_Alias VAGRANT_EXPORTS_REMOVE = /usr/bin/sed -E -e /*/ d -ibak /etc/exports
%admin ALL=(root) NOPASSWD: VAGRANT_EXPORTS_ADD, VAGRANT_NFSD, VAGRANT_EXPORTS_REMOVE
```

## 参考

- [谷歌搜索 "Homestead NFS password"][2]
- [Homestead asking for administrator privileges/password][3]
- [Root Privilege Requirement | Vagrant by HashiCorp][1]

[1]: https://www.vagrantup.com/docs/synced-folders/nfs.html#root-privilege-requirement
[2]: https://www.google.com/search?q=Homestead++NFS+password
[3]: https://laracasts.com/discuss/channels/general-discussion/homestead-asking-for-admin-password